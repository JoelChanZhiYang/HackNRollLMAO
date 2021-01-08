import "./App.css";
import InfiniteScroll from "react-infinite-scroller";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems() {
    this.setState((state) => ({ items: state.items.concat("hi") }));
  }

  render() {
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );
    const items = this.state.items.map((e, index) => (
      <h1 key={index} className="col-sm-12 col-md-7 col-lg-5">
        hi
      </h1>
    ));

    return (
      <div className="row justify-content-center">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={true}
          loader={loader}
        >
          <div className="tracks">{items}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
