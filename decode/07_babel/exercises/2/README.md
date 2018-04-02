## Description
Rewrite the the following into JSX. Save it as input.js and run `npm build`. then open the index.html file.

```
var rootdiv = document.getElementById('root');
var elem = React.createElement(
  'ul',
  null,
  React.createElement(
    'li',
    null,
    'cheese'
  ),
  React.createElement(
    'li',
    null,
    'bacon'
  ),
  React.createElement(
    'li',
    null,
    'milk'
  )
);
ReactDOM.render(elem, rootdiv);

```