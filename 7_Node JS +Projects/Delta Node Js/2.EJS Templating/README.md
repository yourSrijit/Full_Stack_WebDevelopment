# EJS Templating [Embeded Javascript template]
EJS is a simple template language that let you generate HTML markup with plain JS.This is actually a blueprint that repeat in several page.So we dont need to write same code again and again.
`Always store the ejs file in views folder`

```
let path=require("path);
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

// here __dirname return the current folder path.
```

We render in ejs like this 
```
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
```

Also we can send data from index file to ejs file by this ✅✅
```
app.get("/rolldice",(req,res)=>{ 
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});
```

## Interpolation Syntax in Ejs
Embeddng expression into marked up text

```
<% 'Scriptlet' tag, for control-flow, no output ✅
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped) ✅
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

```