import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import store from './Store/index';
import GuardRoute from './Helpers/GuardRoute';

import Home from './Pages/Home.page';
import Login from './Pages/Login.page';
import Admin from './Pages/Admin.page';
import Add from './Pages/Add.page';
import Edit from './Pages/Edit.page';

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/login',
    exact: true,
    children: <Login />
  }
]

function App() {
  return (
    <Provider store={ store }>
    <Router>
      <div>
        <Switch>
          {
            routes.map(element=>{
              return(
                <Route 
                key={element.children}
                {...element}/>
              )
            })
          }
          <GuardRoute exact path='/admin' component={Admin} />
          <GuardRoute exact path='/add' component={Add} />
          <GuardRoute exact path='/edit/:id' component={Edit} />
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
