var Download = React.createClass({

  loadFromServer: function() {
    var self = this;
    $.ajax({
      url: this.props.url,
      success: function(files) {
        var fileList = [];
        $(files).find("a:contains(.)").each(function () {
          var filename = this.href.replace(window.location.host, "").replace("http:///", "");
          if(filename!=""){
            fileList.push(filename);
          }
        });
        self.setState({data: fileList});
      },
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },

  render: function() {
    var self = this;

    var downloadNodes = this.state.data.map(function(download) {

      return (
        <div>
          <a href={download} download>
            <br />
            <span className="glyphicon glyphicon-download-alt"> </span>
              &nbsp; {download.split("/")[1]}         
          </a>
          <br/>
        </div>
      );
    });

    return (
      <div>
      <div className="page-header text-center">
        <h1>资料下载</h1>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">{downloadNodes}</div>
        <div className="col-md-4"></div>  
      </div>
      </div>
    );
  }
});

