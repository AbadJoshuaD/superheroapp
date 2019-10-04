import React, { Component, Fragment } from "react";
import "./App.css";
import { Header } from "./components/header/header.component";
import { SearchBox } from "./components/searchbox/searchbox.component";
import { HeroInfo } from "./components/hero-info/hero-info.component";

class SuperHeroApp extends Component {
  constructor() {
    super();
    this.state = {
      superhero: [],
      searchField: ""
    };
  }
  async componentDidMount() {
    const res = await fetch(
      "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/346.json"
    );
    const heroes = await res.json();
    this.setState((prevState, prevProps) => {
      return {
        superhero: [heroes]
      };
    });
  }
  render() {
    const { superhero, searchField } = this.state;
    return (
      <Fragment>
        <Header></Header>
        <SearchBox></SearchBox>
        <HeroInfo heroes={superhero}></HeroInfo>
      </Fragment>
    );
  }
}
export default SuperHeroApp;
