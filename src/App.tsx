import React, {Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import HeaderContainer from './containers/HeaderContainer';

const BookListContainer = lazy(() => import('./containers/BookListContainer'));
const AddBookContainer = lazy(()=> import('./containers/AddBookContainer'));
const EditBookContainer = lazy(()=> import('./containers/EditBookContainer'));

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Switch>
          <Route path="/addbook">
          <Suspense fallback={<div>Loading...</div>}><AddBookContainer /></Suspense>
          </Route>
          <Route path="/editbook">
          <Suspense fallback={<div>Loading...</div>}><EditBookContainer /></Suspense>
          </Route>
          <Route path="">
          <Suspense fallback={<div>Loading...</div>}><BookListContainer /></Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
