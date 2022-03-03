import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";
// import OverviewContainer from "./containers/OverviewContainer";


const App = () => ( 
    // <HashRouter>
        <div>
            <NavbarContainer />
            {/* <Route exact path="/view/" component={OverviewContainer}></Route> */}
        </div>
    // </HashRouter>
);

export default App;