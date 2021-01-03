import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Songs from "./../songs/songs";
import "./playlist.css";

class ViewPlayListComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showAddSongs:false,
            songMapID:{}
        };
        this.addSongsClick=this.addSongsClick.bind(this);
        this.addSongToPlayList=this.addSongToPlayList.bind(this);
    }
    addSongsClick(){
        let songs=this.props.showPlayList.songs;
        let mapID={};
        for(let i in songs){
            mapID[songs[i].id]=songs[i].id;
        }
        this.setState({
            showAddSongs:true,
            songsList:this.props.songs,
            songMapID:mapID
        });
    }
    addSongDone(){
        this.setState({
            showAddSongs:false
        });
    }
    addSongToPlayList(song){
        let playL=this.props.showPlayList;
        playL.songs.push(song);
        this.props.addPlayListStore(playL);

        let mapID=this.state.songMapID;

        mapID[song.id]=song.id;
        this.setState({
            songMapID:mapID
        });
    }
    shuffleSong(){
        let playL=this.props.showPlayList;
        let songs=playL.songs
        for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }
        playL.songs=songs;
        this.props.addPlayListStore(playL);
    }
    render(){
        const playList=this.props.showPlayList;
        return(
        <div className="viewplaylist">
            <div className="top">
                <div className="playlistname">
                    {this.state.showAddSongs && 
                        <span>Editing </span>
                    }
                    Playlist : {playList.label} ,
                    Created On : {playList.created}
                </div>
                <div>
                    {this.state.showAddSongs===false && 
                        <Fragment>
                            {playList.songs.length>0 &&
                                <button className="button" onClick={()=>this.shuffleSong()}>Shuffle Songs</button>
                            }
                            <button className="button" onClick={()=>this.addSongsClick()}>Add Songs</button>
                            <button className="button" onClick={()=>this.props.close()}>Close</button>
                        </Fragment>
                    }{this.state.showAddSongs===true && 
                        <button className="button" onClick={()=>this.addSongDone()}>Done</button>
                    }
                </div>
            </div>
            {this.state.showAddSongs && 
                <div className="addsongs">
                    <Songs songs={this.state.songsList} mapID={this.state.songMapID} clickAction={this.addSongToPlayList} clickActionLabel={"Add to Playlist"}/>
                </div>
            }
            {this.state.showAddSongs===false && 
                <div>
                    {playList.songs.length>0 &&
                        <Songs songs={playList.songs} enableSearch={false}/>
                    }
                    {playList.songs.length===0 &&
                        <div>There are nos songs added in this playlist</div> 
                    }
                </div>
            }
        </div>   
        )
    }
};
const mapViewPlayListStatstoProps=state=>{
    return{
        songs:state.songs
    }
}
const ViewPlayList=connect(mapViewPlayListStatstoProps,{

})(ViewPlayListComp);
export default ViewPlayList;