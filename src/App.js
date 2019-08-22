import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Appbar from "./components/Appbar";
import CountryList from "./containers/CountryList";
import Country from "./containers/Country";


function App() {
  return (
    <div >
      <Appbar />
      <Switch>
          <Route path="/countrylist" component={CountryList} />
          <Route path="/:country" component={Country} />
          <Route path="/" exact component={CountryList} />
          <Redirect to='/' />
        </Switch>
    </div>
  );
}

export default App;
