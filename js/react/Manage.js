var NewsAddForm = React.createClass({

  handleSubmit: function() {
    alert("test");
    var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
    var tivalue = $("#inputTitle").val();
    var brvalue = $("#inputBrief").val()
    var tevalue = $("#inputText").val()
    ref.push({
      title: $("#inputTitle").val(),
      brief:  $("#inputBrief").val(),
      text: $("#inputText").val()
    }, function() {
      alert("success");
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
                        <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">submit</button>
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


var AdminNews = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
      return { showAdd: false };
  },

  onComplete: function(){
    alert("Deleted!");
  },

  handleClickDelete: function(key) {
    if (confirm("Are you sure?")){
      var ref = new Firebase("https://srichinakenya.firebaseio.com/News");
      ref.child(key).remove(this.onComplete);
    }
  },

  handleClickAdd: function() { 
    this.setState({ showAdd: true });
  },

  render: function() {
    var self=this;
    var newsList = this.props.data.map(function(news, i) {
      return (
            <tr>
              <td className="table-cell"> {i} </td>
              <td className="table-cell"> {news["title"]} </td>
              <td className="table-cell"> {news["brief"]} </td>
              <td className="table-cell"> {news["text"]} </td>
              <td className="table-cell"> <button onClick={self.handleClickDelete.bind(this, news[".key"])} type="button" className="btn btn-danger">DELETE</button> </td>
            </tr>
      );
    });
    return (
            <div>
              <div>
                <NewsAddForm />
              </div>
              <table className="table table-bordered table-striped "> 
                <tr>
                  <th className="col-md-1"> Order </th>
                  <th className="col-md-1"> Title </th>
                  <th className="col-md-2"> Abstract</th>
                  <th className="col-md-6"> Text </th>
                  <th className="col-md-2"> Operations </th>
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

  componentWillMount: function() {
      var newsRef = new Firebase("https://srichinakenya.firebaseio.com/News");
      this.bindAsArray(newsRef, "newsData");
      //this.state.data
      // ref.once('value', function(snapshot) {
      //   snapshot.forEach(function(childSnapshot){
      //     alert(childSnapshot.key());
      //   });
      // });
  },

  componentWillUnmount: function() {
     this.unbind("newsData");
  },

  componentDidMount: function() {
  },

  getInitialState: function() {
    return {newsData: []};
  },


  handleClickNews: function() {
    React.render(
      <AdminNews data={this.state.newsData}  />,
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
