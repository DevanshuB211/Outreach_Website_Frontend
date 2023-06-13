import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Academics from "./Components/Academics/Academics";
import Achievements from "./Components/Achievements/Achievements";
import Life from "./Components/LifeAtIITR/Life";
import Placements20_21 from "./Components/Placements/Placements20_21";
import Placements19_20 from "./Components/Placements/Placements19_20";
import Loader from "./Components/Loader/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "hidden";
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.setState({ isLoading: false });
        document.body.style.overflowY = "auto";
      }, 2000);
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        <div style={this.state.isLoading ? { visibility: "hidden" } : {}}>
          <div>
            <BrowserRouter>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={About} />
              <Route path="/academics" exact component={Academics} />
              <Route path="/achievements" exact component={Achievements} />
              <Route path="/lifeatiitr" exact component={Life} />
              <Route path="/placements/2020-21" exact component={Placements20_21} />
              <Route path="/placements/2019-20" exact component={Placements19_20} />
            </BrowserRouter>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
