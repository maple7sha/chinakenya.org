

var NewsInstance = React.createClass({
  render: function() {
    return (
      <div className="Instancepage">
        <div className="page-header">
          <h3> {this.props.data.title} </h3>
        </div>
        <div>
          <p> {this.props.data.text} </p>
        </div>
      </div>
    );
  }
});

var ProjectInstance = React.createClass({
  render: function() {
    return (
      <div className="Instancepage">
        <div className="page-header">
          <h3> {this.props.data.title} </h3>
        </div>
        <div>
          <p> {this.props.data.text} </p>
        </div>
      </div>
    );
  }
});