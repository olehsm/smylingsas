---
title: Konverter til Jenkinsfile og Multibranch pipeline
description: ""
date: 2022-12-19T08:06:58.266Z
preview: /preview-images/1500px_Jenkins_logo.png
draft: false
tags:
    - jenkins
author: Ole Halvor Smylingsås
pageresources: {}
lastmod: 2023-11-06T20:30:52.741Z
slug: konverter-til-jenkinsfile-og-multibranch-pipeline
---

En prøve- og feileguide for å konverte fra et jenkinsprosjekt til å benytte en Jenkinsfile
<!--more-->

Utgangspunktet for denne guiden var et allerede eksisterende projekt i Jenkins. Fra nå heter det Portal. Portal var av typen "Freestyle project" og et delmål var å legge en Jenkinsfil til i prosjektet og flytte eksisterende byggekonfigurasjon til denne filen. En Jenkinsfil ligger på roten av prosjektet ditt og inneholder altså konfigurasjon for å bygge dette prosjektet. Ser det som enklere å kunne ha denne filen som del av kildekontrollen enn å benytte Jenkins sin egen konfigurasjonsystem.

Startet med å trykke på "Convert This Job To Pipeline". Får da opp en dialog som ber meg gi inn et navn om jeg ønsker. Jeg velger å kalle det "Portal-pipeline" og jeg krysser av for jeg vil legge til en Jenkinsfil i repo med en automatisk commit beskjed. Det som da skjer er at jeg får et nytt prosjekt på linje med Portal og jeg sitter nå med to prosjekter: "Portal" og "Portal-pipeline". Det første er vanlig prosjekt og det andre er en pipeline, men begge peker til det samme repo.

Jeg sjekker at Jenkinsfilen er lagt til på roten av prosjektet. Ser at Jenkins har forsøkt å generere konfigurasjonen til prosjektet inn i filen, med litt ukjent syntaks. Forsøker så å bygge prosjeket i Jenking (Dette prosjektet er ikke satt opp med å automastisk trigge et bygg ved en git push - event). Bygget feilet, ville ikke starte, syntaksfeil

Syntaksen som ble automatisk generert var som følger:

```bash
timestamps {
    node () {
        stage ('Portal - Checkout') {
 	        //...
	    }
 
        stage ('Portal - Build') {
        
            bat """ 
                C:\Tools\git-changelog\bin\git-changelog-command-line.bat -t C:\Tools\git-changelog\bin\template.mustache -fr Prod -tr develop -r .\ -js https://url.to.local.jira.com -jpw SOMEKEY -ju cruisec -of changelog.txt 
            """
            
            bat """ 
                REM NuGet Package Restore
                REM "C:\Program Files\NuGet\nuget.exe" restore Portal.sln -Source \\buildserver\NuGet 
            """
            
            bat """ 
                REM Create a release on Octopus
                "C:\Tools\Octo\Octo.exe" create-release --project "Portal" --server https://deploy.to.server.com/ --apiKey SOMEKEY --releaseNotes "Jenkins build=%BUILD_NUMBER% Commit=%GIT_COMMIT% Branch=%GIT_BRANCH% Url=%GIT_URL% %Changelog%" --deployTo=Dev --progress 
            """ 
        }
    }
}
```

Det er benyttet funksjoner som timestamps og node i denne jenkinsfilen noe som fikk bygget ti å feile. Jeg begynte med å erstatte timestamps med pipeline, men da ble det også nødvendig å kaste ut node() da det ikke støttes av pipeline. Node ble erstattet av stages. Når jeg da hadde et overbygg med pipeline og stages kunne jeg bryte opp jenkinsfilen i stage og enda mindre enhetene steps.

Ender opp med en fungerende jenkinsfil:

```bash
pipeline {
    agent any
	environment {
		OCTO_API_KEY = credentials('OctopusAPIKey')
    }
	
	stages {
		stage ('Portal - Checkout') {
			steps {
				checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'an-unique-id', url: 'https://url.to.git/proflow.git']]]) 
			} 			
		}

		stage('Pre build') { 
			steps {
				bat "\"${tool('nuget')}\" restore Portal.sln -Source ${NUGET_RESTORE_URL} -PackagesDirectory packages"
			}
		}
		
		stage('Build') { 
			steps { 
				bat "\"${tool 'MSBuild 15'}\" Portal.sln /p:Configuration=Release /t:Clean;Rebuild /p:RunOctoPack=true /p:OctoPackPublishPackageToHttp=${OCTO_PUBLISH_URL} /p:OctoPackPublishApiKey=${OCTO_API_KEY}"
			}
		}
				
		stage('Pack, push and deploy packages') {
			steps {
				bat \"${tool 'Octo'}\" create-release --project "ProFlow (portal)" --server=${OCTO_SERVER_URL} --apiKey=${OCTO_API_KEY} --releaseNotes "Jenkins build=%BUILD_NUMBER% Commit=%GIT_COMMIT% Branch=%GIT_BRANCH% Url=%GIT_URL% %Changelog%" --progress --deployto=Dev	
			}			
		}
	}
}
```

> Lærdom 1: Når man klikker på "Convert This Job To Pipeline" så trudde jeg de kunne være lurt å ikke gi den nye prosjektet et navn slik at det kun er den inneværende prosjektet som blir et pipelineprosjekt. Dette var ikke riktig - Jenkins vil alltid navn nytt pipeline prosjekt "*-pipeline". 

> Lærdom 2: Et pipeline prosjekt er ikke det samme som et multibranch prosjekt. Pipelineprosjektet gir meg en Jenkinsfil med byggestep og mulighet for Blue Ocean til å visualisere byggeprogresjonen i nettleseren. Noe som for Portalprosjektet var tilstrekkelig.

> Lærdom 3: Automatisk generering av jenkinsfil vil bruke syntaks som ikke bygger.

> Lærdom 4: Det var enklere deaktivere et prosjekt enn å fjerne det, men det er altså mulig om man går til Jenkinsforsiden og viser alle prosjekter. Det er en meny tilknyttet hvert eneste prosjekt.

Hva så med multibranch pipeline?

> Lærdom 1: Det er ikke mulig å konvertere et eksisterende prosjekt på samme måte som ved et pipelineprosjekt. En må velge "new item" fra hovedmenyen til Jenkins (Dashboard)

Det viste seg som en enekel oppgave å lage et multibranchprosjekt så lenge jeg allerede hadde en jenkinsfil. Jeg droppet å lage et prosjekt med forhåndsdefineerte verdier da disse så ganske like ut når jeg opprettet dummyprosjekter.

> Lærdom 2: Nytt multibranchprosjekt med default ga meg ingenting ekstra.

Jeg legger merke til at prosjektet har et valg som gjør det mulig å basere dette nye prosjektet på et eksisterede prosjekt (som ikke er multibranch) og jeg velger da mitt portalprosjekt. Trykker OK for å lage prosjektet og det er alt oppsett jeg behøver. Det fungerer dog ikke. Det viste seg at de ikke var noe lurt i dette tilfelle å lage et multibranchprosjekt basert på portalprosjektet. I dette tilfellet manglet det for mange av nødvendige konfigurerbare delene. Jeg lager et nytt tomt prosjekt og velger heller å kopiere innstillingene til et multibranchprosjekt jeg vet fungerer. 

> Lærdom 3: ikke baser prosjekt på noe gammelt.


