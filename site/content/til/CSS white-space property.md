+++
author = "Ole Halvor Smylingsås"
description = ""
resources = []
categories = ["Things I've learned (TIL)"]
tags = ["TIL", "CSS", "Typography"]   
slug = ""
title = "CSS white space property"
date = "2018-01-02T21:23:24+01:00"
draft = true
featuretext = ""
featureimg = ""
comments = "false"
+++

>The white space property is a text/content related css property used to controll the flow of 
>the text. 

>CSS white space has seven different values normal, nowrap, pre, pre-line, pre-wrap, initial and inherit.

{{<highlight css>}}
p
{
    white-space: normal
}
{{</highlight>}}
<p>Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default.</p>

{{<highlight css>}}
p
{
    white-space: nowrap
}
{{</highlight>}}
<p>Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered.</p>

{{<highlight css>}}
p
{
    white-space: pre
}
{{</highlight>}}
<p>Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the <pre> tag in HTML</p>

{{<highlight css>}}
p
{
    white-space: pre-line
}
{{</highlight>}}
<p>Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks</p>
    
{{<highlight css>}}
p
{
    white-space: pre-wrap
}
{{</highlight>}}    
<p>Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks</p>
    
{{<highlight css>}}
p
{
    white-space: initial
}
{{</highlight>}}    
<p>initial	Sets this property to its default value.</p>
    
{{<highlight css>}}
p
{
    white-space: inherit
}
{{</highlight>}}    
<p>inherit	Inherits this property from its parent element.</p>
 