var rootdiv = document.getElementById('root');
var elem = React.createElement(<ul>
    <li>cheese</li>
    <li>bacon2</li>
    <li>milk</li>
  </ul>);
ReactDOM.render(elem, rootdiv);