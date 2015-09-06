
var Slide = React.createClass({
  render: function() {
    var divStyle = {backgroundImage: 'url(http://placehold.it/1900x1080&text=Slide One)'};
    return (
        <header id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <div className="fill" style={{backgroundImage: 'url(./content/img/6.jpg)'}}></div>
                    <div className="carousel-caption">
                        
                    </div>
                </div>
                <div className="item">
                    <div className="fill" style={{backgroundImage: 'url(./content/img/2.jpg)'}}></div>
                    <div className="carousel-caption">
                        
                    </div>
                </div>
                <div className="item">
                    <div className="fill" style={{backgroundImage: 'url(./content/img/3.jpg)'}}></div>
                    <div className="carousel-caption">
                    </div>
                </div>
                <div className="item">
                    <div className="fill" style={{backgroundImage: 'url(./content/img/4.jpeg)'}}></div>
                    <div className="carousel-caption">
                    </div>
                </div>
                <div className="item">
                    <div className="fill" style={{backgroundImage: 'url(./content/img/7.jpg)'}}></div>
                    <div className="carousel-caption">
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="icon-prev"></span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="icon-next"></span>
            </a>
        </header>
    );
  }
});

React.render(
  <Slide />,
  document.getElementById('carousel')
);

