import "./App.css";
import { PlayerData } from "./PlayerData/PlayerData";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../utils/apolloclient";
import "bootstrap/dist/css/bootstrap.min.css";
export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="app">
        <PlayerData />
      </div>
    </ApolloProvider>
  );
};

export default App;
