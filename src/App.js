import React, { Component, Fragment } from "react";
import "./App.css";
import { Header } from "./components/header/header.component";
import { SearchBox } from "./components/searchbox/searchbox.component";
import { HeroInfo } from "./components/hero-info/hero-info.component";

class SuperHeroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superhero: [],
      searchField: ""
    };
  }
  async componentDidMount() {
    const res = await fetch(
      "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/1.json"
    );
    const superhero = await res.json();
    this.setState((prevState, prevProps) => {
      return {
        superhero: superhero
      };
    });
  }
  render() {
    const { name } = this.state.superhero;
    return (
      <Fragment>
        <Header></Header>
        <SearchBox></SearchBox>
        <HeroInfo></HeroInfo>
      </Fragment>
    );
  }
}
export default SuperHeroApp;
