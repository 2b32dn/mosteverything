## Description
Rewrite the the following into JSX. Save it as input.js and run `npm run build`. Then open the index.html file in a browser and make sure it displays a successful message.

```javascript
var rootdiv = document.getElementById('root');
var elem = React.createElement(
  'h1',
  null,
  'hello world'
);
ReactDOM.render(elem, rootdiv);
```