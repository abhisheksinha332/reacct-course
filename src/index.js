import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

//component
import Home from './component/home';
import Post from './component/post';
import Profile from './component/profile';
import PostItem from './component/post_item';
import Life from './component/life';
import Condition from './component/condition';
import User from './component/user';




const  App = () => {
  return(
    <BrowserRouter>
    <div>
      <header>
        <NavLink to ="/">Home</NavLink><br />
        <NavLink to ="/post" activeStyle={{color:'red'}}>Post</NavLink><br />
        <NavLink to ="/profile">Profile</NavLink><br />
        <NavLink to ="/life">Life</NavLink><br/>
        <NavLink to ="/condition">Condition</NavLink><br/> 
        <NavLink to ="/user">User</NavLink>
        <hr />
      </header>
      <Switch>
        <Route path="/post/:id/:username" component={PostItem} />
        <Route path="/post"  component={Post} />
        <Route path="/profile" component={Profile} />
        <Route path="/life" component={Life}/>
        <Route path="/condition" component = {Condition} />
        <Route path="/user" component={User} />
        <Route path="/" exact component={Home} />

        <Route render = { () => <h3>OOps 404 </h3> } />
      </Switch>
     
    </div>
     
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)