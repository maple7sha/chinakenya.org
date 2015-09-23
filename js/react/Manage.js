/* Alert functions at the top bar of admin page */
var AlertSuccess = React.createClass({
  render: function() {
    return (
      <div className="alert alert-success">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Success {this.props.msg}!</strong> 
      </div>
    );
  }
});

var AlertFailure = React.createClass({
  render: function() {
    return (
      <div className="alert alert-failure">
              <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>Failure!</strong> 
      </div>
    );
  }
});

/* Form component to add news */
var NewsAddForm = React.createClass({

  handleSubmit: function() {
    var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
    ref.push({
      title: $("#inputTitle").val(),
      brief: $("#inputBrief").val(),
      text: $("#inputText").val()
    }, function(error) {
      if(error){
        React.render(
          <AlertFailure msg={" in updating News"}/>,
          document.getElementById('alert')
        );
      }
      else{
        $("#inputTitle").val('');
        $("#inputBrief").val('');
        $("#inputText").val('');
        React.render(
          <AlertSuccess msg={" in adding News"}/>,
          document.getElementById('alert')
        );
      }
    });
  },

  render: function() {
    return (
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <button data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="btn btn-success">Add News</button>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <div className="panel-body">
                <div>
                  <br />

                  <form className="form-horizontal">
                    <div className="form-group">
                      <label for="inputTitle" className="col-sm-2 control-label">Title</label>
                      <div className="col-sm-8">
                        <input className="form-control" id="inputTitle" placeholder="Concise Title for News"> </input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputBrief" className="col-sm-2 control-label">Abstract</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" id="inputBrief" rows="2" placeholder="Brief introduction on the news"></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputText" className="col-sm-2 control-label">Text</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" id="inputText" rows="8" placeholder="Full text for the news"></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">submit</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
});

/* Form component to UPDATE news */
var NewsUpdateForm = React.createClass({

  handleSubmit: function() {
    var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
    ref.push({
      title: $("#inputTitle").val(),
      brief: $("#inputBrief").val(),
      text: $("#inputText").val()
    }, function(error) {
      if(error){
        React.render(
          <AlertFailure msg={" in updating News"}/>,
          document.getElementById('alert')
        );
      }
      else{
        $("#inputTitle").val('');
        $("#inputBrief").val('');
        $("#inputText").val('');
        React.render(
          <AlertSuccess msg={" in updating News"}/>,
          document.getElementById('alert')
        );
      }
    });
  },

  render: function() {
    return (
        <div className="panel-group" id="accordion2">
          <div className="panel panel-default">
            <div id="collapse2" className="panel-collapse collapse">
              <div className="panel-body">
                <div>
                  <br />

                  <form className="form-horizontal">
                    <div className="form-group">
                      <label for="inputTitle" className="col-sm-2 control-label">Title</label>
                      <div className="col-sm-8">
                        <input className="form-control" id="inputTitle" placeholder="Concise Title for News"> {this.props.news["inputTitle"]} </input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputBrief" className="col-sm-2 control-label">Abstract</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" id="inputBrief" rows="2" placeholder="Brief introduction on the news"> {this.props.news["inputBrief"]}</textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputText" className="col-sm-2 control-label">Text</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" id="inputText" rows="8" placeholder="Full text for the news">{this.props.news["inputText"]}</textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">submit</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
});

/* Main Admin portal to control news */
var AdminNews = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
    this.bindAsArray(ref, "items");

  },

  getInitialState: function() {
    return { items: []};
  },

  handleClickDelete: function(key) {
    if (confirm("Are you sure?")){
      var onComplete = function(error) {
        if (error) {
          console.log('Synchronization failed');
        } else {
          console.log('Synchronization succeeded');
          React.render(
            <AlertSuccess msg={" in deleting News"} />,
            document.getElementById('alert')
          );
        }
      };

      var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
      ref.child(key).remove(onComplete);
    }
  },

  handleClickUpdate: function(news) {
    if (confirm("Are you sure?")){
      var onComplete = function(error) {
        if (error) {
          console.log('Synchronization failed');
        } else {
          $("#editTitle").val(news["title"]);
          console.log('Synchronization succeeded');
          React.render(
            <AlertSuccess msg={" in updating News"} />,
            document.getElementById('alert')
          );
        }
      };

      var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
      
      ref.child(news[".key"]).update({
        title: $("#editTitle"+news[".key"]).val(),
        brief: $("#editBrief"+news[".key"]).val(),
        text: $("#editText"+news[".key"]).val()
      }, onComplete);
    }
  },

  render: function() {
    var self=this;
    var newsList = self.state.items.map(function(news, i) {
      var editTitle = "editTitle" + news[".key"];
      var editBrief = "editBrief" + news[".key"];
      var editText = "editText" + news[".key"];
      return (
            <tr>
              <td className="table-cell"> <textarea id={editTitle} className="edit" defaultValue={news["title"]} /> </td>
              <td className="table-cell"> <textarea id={editBrief} className="edit" defaultValue={news["brief"]} /> </td>
              <td className="table-cell"> <textarea id={editText} className="edit" defaultValue={news["text"]} /> </td>
              <td className="table-button table-control"> 
                <button type="button" onClick={self.handleClickUpdate.bind(self, news)} className="btn btn-warning" >UPDATE</button>
              </td>
              <td className="table-button table-control"> 
                <button onClick={self.handleClickDelete.bind(self, news[".key"])}  className="btn btn-danger">DELETE</button> 
              </td>
            </tr>
      );
    });
    //newsList.reverse();
    return (
            <div>
              <div>
                <NewsAddForm />
                <div id="updateForm"></div>
              </div>
              <table className="table table-striped "> 
                <tr>
                  <th className="col-md-2"> Title </th>
                  <th className="col-md-2"> Abstract </th>
                  <th className="col-md-5"> Text </th>
                </tr>
                {newsList}
              </table>
            </div>
           );
  }
});

// React className for News
var Manage = React.createClass({
  mixins: [ReactFireMixin],

  handleClickNews: function() {
    React.render(
      <AdminNews />,
      document.getElementById('admin-content')
    );
  },

  handleClickColumnist: function() {
    React.render(
      <div> Test Columnist </div>,
      document.getElementById('admin-content')
    );
  },

	render: function() {
    self = this;
    return (
          <div>
            <ul className="nav nav-tabs nav-justified">
              <li role="presentation"><a href="#" onClick={self.handleClickNews.bind(this)} data-toggle="tab">News</a></li>
              <li role="presentation"><a href="#" onClick={self.handleClickColumnist.bind(this)} data-toggle="tab">Columnists</a></li>
              <li role="presentation"><a href="#" data-toggle="tab">Projects</a></li>
            </ul>

            <div id="admin-content">
            </div>
          </div>
           );
  }
});


React.render(
  <Manage />,
  document.getElementById('admin')
);
