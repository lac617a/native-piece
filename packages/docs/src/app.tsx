import React from "react";
import { Route, Router } from "wouter";
import { Main, Docs } from "./views";
import Header from "./layouts/Header/Header";
import { Box } from "native-piece";

export function App() {

  return (
    <>
      <Header />
      <Box marginTop={150}>
        <Route path="/" component={Main} />
        <Router base="/docs">
          <Route path="/" component={Docs} />
          <Route path="/:slug" component={() => <div>Hello!</div>} />
        </Router>
        <Route path="/users/:name">{(params) => <div>Hello, {params.name}!</div>}</Route>
      </Box>
    </>
  );
}
