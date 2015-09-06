
var Header = React.createClass({

  handleClickContent: function() {
    React.render(
      <Content />,
      document.getElementById('content')
    );
  },

  handleClickDownload: function() {
    React.render(
      <Download url={"download/"} pollInterval={2000} />,
      document.getElementById('content')
    );
  },

  handleClickManage: function() {
    React.render(
      <Manage />,
      document.getElementById('content')
    );
  },

  render: function() {
    var self = this;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="index.html">中国在肯负责任投资</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li>
                      <a className="navbar-menu" href="#news" onClick={self.handleClickContent}>新闻</a>
                  </li>
                  <li>
                      <a className="navbar-menu" href="#columnists" onClick={self.handleClickContent}>专栏</a>
                  </li>
                  <li>
                      <a className="navbar-menu" href="#projects" onClick={self.handleClickContent}>项目</a>
                  </li>
                  <li>
                      <a className="navbar-menu" href="#about" onClick={self.handleClickContent}>关于</a>
                  </li>
                  <li>
                      <a className="navbar-menu" href="#contact" onClick={self.handleClickContent}>联系方式</a>
                  </li>
                  <li>
                      <a className="navbar-menu" href="#" onClick={self.handleClickDownload}>下载</a>
                  </li>
                  <li>
                      <a className="navbar-menu" href="admin.html" onClick={self.handleClickManage}>管理</a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
});


React.render(
  <Header></Header>,
  document.getElementById('header')
);

