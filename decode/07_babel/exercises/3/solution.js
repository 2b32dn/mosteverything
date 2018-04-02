var rootdiv = document.getElementById('root');
var elem = (<div>
    <a href="www.google.com">Google.com</a>
    <div id="somedivid">some div</div>
</div>)
ReactDOM.render(elem, rootdiv);