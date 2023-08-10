import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop3 from "./pages/Desktop3";
import { useEffect } from "react";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://superb-ram-32.hasura.app/v1/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = 'JFrmZDMif2LT3tbxtgfO57vtOUAWnJhay0T12eE9W9Y3FjNNpXf3XMU1KRLDxrtv';
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": token
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Desktop3 />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
