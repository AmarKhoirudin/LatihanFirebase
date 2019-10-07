import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as Routes from "../../constants/routes";

import { AuthUserContext } from "../Session";

const Navigation = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)};
      </AuthUserContext.Consumer>
    </div>
  );
};

const NavigationAuth = () => {
  return (
    <ul>
      <li>
        <Link to={Routes.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={Routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={Routes.ACCOUNT}>Account</Link>
      </li>

      <li>
        <SignOutButton />
      </li>
    </ul>
  );
};

const NavigationNonAuth = () => {
  return (
    <ul>
      <li>
        <Link to={Routes.SIGN_IN}>Sign In</Link>
      </li>

      <li>
        <Link to={Routes.ADMIN}>Admin</Link>
      </li>
    </ul>
  );
};

export default Navigation;
