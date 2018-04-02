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
    'bacon2'
  ),
  React.createElement(
    'li',
    null,
    'milk'
  )
);
ReactDOM.render(elem, rootdiv);
