import {BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import React from "react";
import Home from './views/home';
import Playlist from './views/playlist';

const APP_BASE='/my-music'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      tab:'songs'
    }
    this.selectTab=this.selectTab.bind(this);
  }
  selectTab(tabName){
    this.setState({
        tab:tabName
    });
  }
  loadSongs(){
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json()).then(
    (result) => {
        this.props.addList({
          songs:result    
      });
    },(error)=>{
        console.log('there is some eror: '+error);
    });
  }
  componentDidMount(){
      this.loadSongs();
       this.setState({
          tab:window.location.pathname==='/my-music'?'songs':"playlist"
       });
  }
  render(){
  return (
    <section className="music">
      <BrowserRouter>
        <section className="center in-flex">
          <Link to={APP_BASE+"/"} className={"button "+(this.state.tab==='songs'?'selected':"")} onClick={()=>this.selectTab('songs')}>Home</Link>
          <Link to={APP_BASE+"/playlist"} className={"button "+(this.state.tab==='playlist'?'selected':"")} onClick={()=>this.selectTab('playlist')}>Playlist</Link>
        </section>
        <hr/>
        <Switch>
          <Route exact path={APP_BASE+"/"} component={Home}/>
          <Route exact path={APP_BASE+"/playlist"} component={Playlist}/>
        </Switch>     
      </BrowserRouter>
    </section>
  );
}
}
export default App;
