import "./assets/stylesheets/App.css";
import InfiniteScroll from "react-infinite-scroller";
import { Component } from "react";
import Arrow from "./Arrow.jsx";
import Text from "./Text.jsx";
import Treasure from "./Treasure.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Scroll Down For Something Cool",
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
    this.setState((state) => ({
      items: [],
      length: 0,
      header: "Oops that Treasure is a TRAPsure!",
    }));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  randomNum(index) {
    Math.seed(index);
    return Math.random();
  }

  emptyRowSegment() {
    return <div className="row_segment"></div>;
  }

  render() {
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );
    const items = this.state.items.map((e, index) => {
      if (e < 0.025) {
        return (
          <div key={index} className="one_row">
            {this.emptyRowSegment()}
            <Arrow/>
            <Text randNum={e * 20} />
          </div>
        );
      } else if (e < 0.05) {
        return (
          <div key={index} className="one_row">
            <Text randNum={e * 20} />
            <Arrow/>
            {this.emptyRowSegment()}
          </div>
        );
      } else if (e < 0.9) {
        return (
          <div key={index} className="one_row">
            {this.emptyRowSegment()}
            <Arrow/>
            {this.emptyRowSegment()}
          </div>
        );
      } else {
        return (
          <div key={index} className="one_row">
            {this.emptyRowSegment()}
            <Arrow/>
            <Treasure fku={this.bringToTop} randNum={(e - 0.9) * 10}></Treasure>
          </div>
        );
      }
    });

    return (
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-9 col-lg-8">
          <p className="text-center banner">{this.state.header}</p>
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
