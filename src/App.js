// LIBS
import { BrowserRouter as Router, Switch } from "react-router-dom";

// COMPONENTS
import { Home, Browse, SignUp, SignIn } from "./pages";

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import {
  HOME_ROUTE,
  BROWSE_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from "./constants/routes";
import { useAuth } from "./hooks";

const App = () => {
  const { user } = useAuth();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          loggedIn={BROWSE_ROUTE}
          path={HOME_ROUTE}
        >
          <Home />
        </IsUserRedirect>
        <ProtectedRoute exact user={user} path={BROWSE_ROUTE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          exact
          user={user}
          loggedIn={BROWSE_ROUTE}
          path={SIGNUP_ROUTE}
        >
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedIn={BROWSE_ROUTE}
          path={SIGNIN_ROUTE}
        >
          <SignIn />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
};

export default App;
