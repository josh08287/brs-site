import React, { Component, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { HeaderBar, NavBar, NotFound } from './components';
import Home from './Home';

// const Products = withRouter(
//   lazy(() => import(/* webpackChunkName: "products" */ './products/Products')),
// );
//const Products = lazy(() =>
 // import(/* webpackChunkName: "products" */ './products/Products'),
//)//;


class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Redirect from="/" exact to="/home" /> */}
                <Route path="home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
