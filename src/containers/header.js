import { Header } from "../components";

// ROUTES
import { HOME_ROUTE, SIGNIN_ROUTE } from "../constants/routes";

export default function HeaderComponent({ children }) {
  return (
    <Header>
      <>
        <Header.Frame>
          <Header.Logo
            to={HOME_ROUTE}
            alt="Netflix"
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
          />
          <Header.Button to={SIGNIN_ROUTE}> Sign In </Header.Button>
        </Header.Frame>
        {children}
      </>
    </Header>
  );
}
