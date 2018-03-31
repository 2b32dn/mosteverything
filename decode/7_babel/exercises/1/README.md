## Description
Rewrite the the following into JSX. Save it as input.js and run `npm build`. Then open the index.html file.

```javascript
var rootdiv = document.getElementById('root');
var elem = React.createElement(
  'h1',
  null,
  'hello world'
);
ReactDOM.render(elem, rootdiv);
```