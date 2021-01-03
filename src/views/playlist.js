import React from "react";
import {addPlayList} from "./../store/actions/";
import {connect} from 'react-redux';
import PlaylistItem from "./../components/playlist/playlist-comp";
import ViewPlayList from "./../components/playlist/viewplaylist";
class PlaylistComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editList:false,
            renderKey:0,
            playListToEdit:{}
        }
        this.createPlayList=this.createPlayList.bind(this);
        this.editPlayList=this.editPlayList.bind(this);
        this.addPlayListStore=this.addPlayListStore.bind(this);
        this.close=this.close.bind(this);
    }
    createPlayList(){
        let playList=this.props.playList;
        let obj={
            label:playList.length+1,
            songs:[],
            created:new Date().toLocaleString()
        };
        playList.push(obj);
        this.props.addPlayList({
            playList:playList
        });
        this.setState({
            renderKey:(new Date()).getTime()
        })
    }
    addPlayListStore(nList){
        let playList=this.props.playList;
        for(var i in playList){
            if(playList[i].label===nList.label){
                playList[i]=nList;
            }
        }
        this.props.addPlayList({
            playList:playList
        });
        
    }
    close(){
        this.setState({
            editList:false
        });
    }
    editPlayList(item){
        this.setState({
            playListToEdit:item
        });
        this.setState({
            editList:true
        });
    }
    render(){
        return (
            <section className="playlistbox">
                {this.state.editList===false && 
                    <React.Fragment>
                        <PlaylistItem key={this.state.renderKey} playList={this.props.playList} editPlayList={this.editPlayList}/>
                        <div>
                            <button className="button" onClick={this.createPlayList}>Create Playlist</button>
                        </div>
                    </React.Fragment>
                }
                {this.state.editList && 
                    <ViewPlayList showPlayList={this.state.playListToEdit} addPlayListStore={this.addPlayListStore} close={this.close}/>
                }
            </section>
        )   
    }
}
const mapPlayListStatetoProps=state=>{
    return {
        playList:state.playList
    }
}
const Playlist = connect(mapPlayListStatetoProps, {
    addPlayList
})(PlaylistComp);
export default Playlist;