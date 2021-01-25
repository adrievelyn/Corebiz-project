import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./Page/Page";
/*import Header from "./Components/Header";
import Banner from "./Components/Banner";*/
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

/* */

function App() {
  return (

      <BrowserRouter>
          <Switch>
           <Route exact path="/">
              <Page />
            </Route>
           
           
          </Switch>
      </BrowserRouter>

  );
}

export default App;