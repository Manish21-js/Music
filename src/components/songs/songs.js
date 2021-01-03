import SongsList from "./songslist";
import React from "react";
import "./songs.css";
class Songs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
        this.searchList=this.searchList.bind(this);
    }
    filterList(query){
        let list=this.props.songs.filter((song)=>{
            return query?(song.title.search(query)>-1):true;
        });
        this.setState({
            list:list
        });
    }
    searchList(e){
        let query=e.target.value;
        this.filterList(query);
    }
    componentDidMount(){
        let songs=this.props.songs;
        this.setState({
            list:songs
        });
    }
    render(){
        return(
            <div className="songs-box">
                {this.props.enableSearch!==false &&
                    <div className="search">
                        <input type="text" placeholder="Type Song Lyrics to search..." onChange={this.searchList}/>
                    </div>
                }
                <div>
                    <SongsList list={this.state.list} mapID={this.props.mapID} clickAction={this.props.clickAction} clickActionLabel={this.props.clickActionLabel}/>
                </div>
            </div>
            )
        }
}
export default Songs;