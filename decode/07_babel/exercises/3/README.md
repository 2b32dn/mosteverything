## Description
Rewrite the the following into JSX. Save it as input.js and run `npm run build`. then open the index.html file.

```
var rootdiv = document.getElementById('root');
var elem = React.createElement(
    "div",
    null,
    React.createElement(
        "a",
        { href: "www.google.com" },
        "Google.com"
    ),
    React.createElement(
        "div",
        { id: "somedivid" },
        "some div"
    )
);
ReactDOM.render(elem, rootdiv);
```