import React from "react";
import UserList from "components/UserList/UserList";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from "components/UserDetails";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/:username">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
