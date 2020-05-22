import React from 'react';
import './App.css';
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';
import {Switch,Route} from 'react-router-dom';
import NewsPosts from './containers/NewsPosts/NewsPosts';
import Bookmark from "./containers/Bookmark/Bookmark";
import News from "./components/FullPost/FullPost";
import Page404 from "./components/Page404/Page404";
function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>             
              <Route path="/"  exact  component={NewsPosts} />
              <Route path="/Bookmark" exact component={Bookmark}/>  
              <Route path="/news" exact component={News}/> 
              <Route component={Page404} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
