var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>
          Here are few exapmle locations to try out:
        </p>
        <ol>
          <li><Link to="/?location=Puszczykowo">Puszczykowo, PL</Link></li>
          <li><Link to="/?location=London">London, UK</Link></li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
