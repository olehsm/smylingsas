+++
author = "Ole Halvor Smylingsås"
description = ""
resources = []
categories = []
tags = ["hugo"]  
slug = ""
title = "Development enviroment"
date = "2017-09-04T22:43:58+02:00"
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

<!--more-->
{{<highlight html>}}
Copyright (C) 2016 Microsoft Corporation. All rights reserved.

PS C:\Users\olehals> d:
PS D:\> ls


    Directory: D:\


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       24.09.2016     10.32                Ny nettside 2016
d-----       26.06.2017     21.34                Ny nettside 2017
d-----       20.05.2017     23.19                Småprosjekter
d-----       12.03.2017     17.20                Spill

{{</highlight>}}

{{<highlight html>}}
PS D:\> hugo new site Smylingsas.net
Congratulations! Your new Hugo site is created in D:\Smylingsas.net.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/, or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>\<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".

Visit https://gohugo.io/ for quickstart guide and full documentation.
{{</highlight>}}

{{<highlight html>}}
PS D:\> hugo new theme Smylingsas
Error: Unable to locate Config file. Perhaps you need to create a new site.
       Run `hugo help new` for details. (Config File "config" Not Found in "[D:\\]")
{{</highlight>}}

{{<highlight html>}}
PS D:\> hugo new "Site Development"\"Development enviroment".html
Error: Unable to locate Config file. Perhaps you need to create a new site.
       Run `hugo help new` for details. (Config File "config" Not Found in "[D:\\]")
{{</highlight>}}

{{<highlight html>}}
PS D:\> hugo server
Error: Unable to locate Config file. Perhaps you need to create a new site.
       Run `hugo help new` for details. (Config File "config" Not Found in "[D:\\]")
{{</highlight>}}

{{<highlight html>}}
PS D:\> ls


    Directory: D:\


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       24.09.2016     10.32                Ny nettside 2016
d-----       26.06.2017     21.34                Ny nettside 2017
d-----       04.09.2017     22.16                Smylingsas.net
d-----       20.05.2017     23.19                Småprosjekter
d-----       12.03.2017     17.20                Spill

{{</highlight>}}

{{<highlight html>}}
PS D:\> cd .\Smylingsas.net\
PS D:\Smylingsas.net> hugo new theme Smylingsas
PS D:\Smylingsas.net> hugo new "Site Development"\"Development enviroment".html
D:\Smylingsas.net\content\Site Development created
PS D:\Smylingsas.net> ls


    Directory: D:\Smylingsas.net


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       04.09.2017     22.16                archetypes
d-----       04.09.2017     22.16                content
d-----       04.09.2017     22.16                data
d-----       04.09.2017     22.16                layouts
d-----       04.09.2017     22.16                static
d-----       04.09.2017     22.16                themes
-a----       04.09.2017     22.16             82 config.toml

{{</highlight>}}

PS D:\Smylingsas.net> cd .\themes\
PS D:\Smylingsas.net\themes> ls


    Directory: D:\Smylingsas.net\themes


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       04.09.2017     22.33                Smylingsas


PS D:\Smylingsas.net\themes> cd ..
PS D:\Smylingsas.net> cd .\content\
PS D:\Smylingsas.net\content> ls


    Directory: D:\Smylingsas.net\content


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----       04.09.2017     22.34             85 Site Development


PS D:\Smylingsas.net\content> hugo new "Site Development"\Enviroment.html
Error: Unable to locate Config file. Perhaps you need to create a new site.
       Run `hugo help new` for details. (Config File "config" Not Found in "[D:\\Smylingsas.net\\content]")

PS D:\Smylingsas.net\content> cd..
PS D:\Smylingsas.net> hugo new "Site Development"\Enviroment.html
Error: D:\Smylingsas.net\content\Site Development already exists
PS D:\Smylingsas.net> hugo help
hugo is the main command, used to build your Hugo site.

Hugo is a Fast and Flexible Static Site Generator
built with love by spf13 and friends in Go.

Complete documentation is available at http://gohugo.io/.

Usage:
  hugo [flags]
  hugo [command]

Available Commands:
  benchmark   Benchmark Hugo by building a site a number of times.
  config      Print the site configuration
  convert     Convert your content to different formats
  env         Print Hugo version and environment info
  gen         A collection of several useful generators.
  help        Help about any command
  import      Import your site from others.
  list        Listing out various types of content
  new         Create new content for your site
  server      A high performance webserver
  undraft     Undraft changes the content's draft status from 'True' to 'False'
  version     Print the version number of Hugo

Flags:
  -b, --baseURL string             hostname (and path) to the root, e.g. http://spf13.com/
  -D, --buildDrafts                include content marked as draft
  -E, --buildExpired               include expired content
  -F, --buildFuture                include content with publishdate in the future
      --cacheDir string            filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
      --canonifyURLs               if true, all relative URLs will be canonicalized using baseURL
      --cleanDestinationDir        remove files from destination not found in static directories
      --config string              config file (default is path/config.yaml|json|toml)
  -c, --contentDir string          filesystem path to content directory
  -d, --destination string         filesystem path to write files to
      --disable404                 do not render 404 page
      --disableKinds stringSlice   disable different kind of pages (home, RSS etc.)
      --disableRSS                 do not build RSS files
      --disableSitemap             do not build Sitemap file
      --enableGitInfo              add Git revision, date and author info to the pages
      --forceSyncStatic            copy all files when static is changed.
  -h, --help                       help for hugo
      --i18n-warnings              print missing translations
      --ignoreCache                ignores the cache directory
  -l, --layoutDir string           filesystem path to layout directory
      --log                        enable Logging
      --logFile string             log File path (if set, logging enabled automatically)
      --noChmod                    don't sync permission mode of files
      --noTimes                    don't sync modification time of files
      --pluralizeListTitles        pluralize titles in lists using inflect (default true)
      --preserveTaxonomyNames      preserve taxonomy names as written ("Gérard Depardieu" vs "gerard-depardieu")
      --quiet                      build in quiet mode
      --renderToMemory             render to memory (only useful for benchmark testing)
  -s, --source string              filesystem path to read files relative from
      --stepAnalysis               display memory and timing of different steps of the program
  -t, --theme string               theme to use (located in /themes/THEMENAME/)
      --themesDir string           filesystem path to themes directory
      --uglyURLs                   if true, use /filename.html instead of /filename/
  -v, --verbose                    verbose output
      --verboseLog                 verbose logging
  -w, --watch                      watch filesystem for changes and recreate as needed

Additional help topics:
  hugo check     Contains some verification checks

Use "hugo [command] --help" for more information about a command.
PS D:\Smylingsas.net> hugo new --help
Create a new content file and automatically set the date and title.
It will guess which kind of file to create based on the path provided.

You can also specify the kind with `-k KIND`.

If archetypes are provided in your theme or site, they will be used.

Usage:
  hugo new [path] [flags]
  hugo new [command]

Available Commands:
  site        Create a new site (skeleton)
  theme       Create a new theme

Flags:
      --editor string   edit new content with this editor, if provided
  -f, --format string   frontmatter format (default "toml")
  -h, --help            help for new
  -k, --kind string     content type to create
  -s, --source string   filesystem path to read files relative from

Global Flags:
      --config string    config file (default is path/config.yaml|json|toml)
      --log              enable Logging
      --logFile string   log File path (if set, logging enabled automatically)
      --quiet            build in quiet mode
  -v, --verbose          verbose output
      --verboseLog       verbose logging

Use "hugo new [command] --help" for more information about a command.
PS D:\Smylingsas.net> hugo new bookshelp\book1.html
D:\Smylingsas.net\content\bookshelp\book1.html created
PS D:\Smylingsas.net> hugo new "Site Development\DevelopmentEnviroment.html"
Error: mkdir D:\Smylingsas.net\content\Site Development\: Kan ikke opprette en fil når filen allerede finnes.
PS D:\Smylingsas.net> hugo new bookshelp\book1.html
D:\Smylingsas.net\content\bookshelp\book1.html created
PS D:\Smylingsas.net> hugo new "Site Development\DevelopmentEnviroment.html"
D:\Smylingsas.net\content\Site Development\DevelopmentEnviroment.html created
PS D:\Smylingsas.net> hugo server
Started building sites ...
Built site for language en:
0 of 2 drafts rendered
0 future content
0 expired content
0 regular pages created
6 other pages created
0 non-page files copied
0 paginator pages created
0 tags created
0 categories created
total in 14 ms
Watching for changes in D:\Smylingsas.net\{data,content,layouts,static}
Serving pages from memory
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
