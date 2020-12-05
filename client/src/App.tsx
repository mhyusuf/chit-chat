import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getCurrentUser } from "./actions";
import AuthorizedApp from "./apps/AuthorizedApp";
import "./App.scss";
import { User } from "./interfaces/reducerInterfaces";
import UnauthorizedApp from "./apps/UnauthorizedApp";

function App({
  user,
  getCurrentUser,
}: {
  user: User;
  getCurrentUser: () => void;
}) {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <BrowserRouter>
      {user.userId ? <AuthorizedApp /> : <UnauthorizedApp />}
      {/* <AuthorizedApp /> */}
    </BrowserRouter>
  );
}

function mapStatetoProps({ user }: { user: User }) {
  return { user };
}

export default connect(mapStatetoProps, { getCurrentUser })(App);
