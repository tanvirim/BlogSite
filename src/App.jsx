import React from 'react';
import Nav from './components//navbar/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from './components/navitem/newblog';
import About from './components/navitem/about';
import BlogDetails from './components/body/blogDetails';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/new'>
            <New />
          </Route>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
