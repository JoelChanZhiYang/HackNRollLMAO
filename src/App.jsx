import "./assets/stylesheets/App.css";
import InfiniteScroll from "react-infinite-scroller";
import { Component } from "react";
import Arrow from "./Arrow.jsx";
import Text from "./Text.jsx";

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
      items: state.items.concat("hi"),
      length: state.length + 1,
    }));
  }

  bringToTop() {
    this.setState(state => ({items: []}))
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  render() {
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );
    const items = this.state.items.map((e, index) => {
      return index === 100 ? (
        <button onClick={this.bringToTop}>hi</button>
      ) : (
        <h1 key={index} className="">
          <Text randNum = {Math.random()}/>
        </h1>
      );
    });

    return (
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-7 col-lg-5">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems}
            hasMore={true}
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
