import React, { Component } from "react";
import { Container, Header, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import NotesList from "./components/NotesList/NotesList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Segment inverted vertical textAlign="center">
            <Container as="nav">
              <Header inverted as="h1">
                Roby Afrizal Palmendha
              </Header>
              <Menu borderless compact inverted>
                <Menu.Item active>To Do List with Redux</Menu.Item>
              </Menu>
            </Container>
            <Container className="content">
              <Header inverted as="h1">
                Learn React Redux
              </Header>
              <Form />
              <List />
              <NotesList />
            </Container>
            <Segment inverted vertical as="footer">
              built with passion - by{" "}
              <a href="https://robyafrizalpalmendha.github.io">
                Roby Afrizal Palmendha
              </a>
            </Segment>
          </Segment>
        </div>
      </Provider>
    );
  }
}

export default App;
