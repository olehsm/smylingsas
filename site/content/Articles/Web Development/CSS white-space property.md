+++
date = "2018-01-02T21:23:24+01:00"
draft = true
title = "CSS white space property"

+++

>The white space property is a text/content related css property used to controll the flow of 
>the text. 

```
p
{
    white-space: nowrap
}
```

>CSS white space has seven different values normal, nowrap, pre, pre-line, pre-wrap, initial >and inherit.

<dl>
    <dt>normal</dt>
    <dd>
        Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default.
    </dd>
    <dt>nowrap</dt>
    <dd>
        Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a ```<br>``` tag is encountered.
    </dd>
    <dt>pre</dt>
    <dd>
        Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the ```<pre>``` tag in HTML
    </dd>
    <dt>pre-line</dt>
    <dd>
        Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks
    </dd>
    <dt>pre-wrap</dt>
    <dd>
        Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks
    </dd>
    <dt>initial</dt>
    <dd>
        initial	Sets this property to its default value.
    </dd>
    <dt>inherit</dt>
    <dd>
        inherit	Inherits this property from its parent element.
    </dd>
</dl>

{{<highlight js>}}

var foo = "English men"
var bar = "bar"

function getJoke(foo, bar) {
    return
        "two " + foo + " walk into a " + bar
}

{{</highlight>}}

