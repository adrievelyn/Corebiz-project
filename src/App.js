import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
/*import Badges from "./pages/Badges";

/*  
            <Route path="/ProductsList">
              <ProductsList />
            </Route>
            <Route path="/SatisfactionClients">
              <SatisfactionClients />
            </Route>
            <Route path="/singleorder">
              <SingleOrder />
            </Route>*/

/**/

function App() {
  return (

      <BrowserRouter>
          <Switch>
           <Route exact path="/">
              <Header />
            </Route>
          </Switch>
      </BrowserRouter>

  );
}

export default App;