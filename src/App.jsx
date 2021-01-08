import "./assets/stylesheets/App.css";
import InfiniteScroll from "react-infinite-scroller";
import { Component } from "react";
import Arrow from "./Arrow.jsx";
import Text from "./Text.jsx";
// import Treasture from "./Treasure.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      length: 0,
    };
    this.loadItems = this.loadItems.bind(this);
    this.bringToTop = this.bringToTop.bind(this);
  }

  loadItems() {
    this.setState((state) => ({
      items: state.items.concat(Math.random()),
      length: state.length + 1,
    }));
  }

  bringToTop() {
    this.setState((state) => ({ items: [], length: 0 }));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  randomNum(index){
    Math.seed(index);
    return Math.random();
  }

  
  render() {
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );
    const items = this.state.items.map((e, index) => {
      return (
        <div key={index} className="one_row">
          {/* <Treasure fku={this.bringToTop}></Treasure> */}
          <div style={{width:"32%"}}></div>
          <Arrow></Arrow>
          <Text randNum= {e}/>
        </div>
      );
    });

    return (
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-9 col-lg-8">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems}
            hasMore={this.state.length < 1000}
            loader={loader}
          >
            <div className="tracks">{items}</div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
