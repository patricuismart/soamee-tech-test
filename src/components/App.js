// File src/components/App.js
import '../styles/main.scss';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Layout
import Header from './Header';
import Footer from './Footer';
import UserDetailPage from './UserDetailPage';
import MainPage from './MainPage';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/user/:userId">
            {/*Paint Detail Card*/}
            <UserDetailPage selectedUser={null} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
