import React from "react";
import Songs from "../components/songs/songs";
import {addList} from "./../store/actions/";
import {connect} from "react-redux";

class Homepage extends React.Component {
    render() {
        return (
        <section className="homepage">
            {this.props.songs.length>0 && 
                <Songs songs={this.props.songs}/>
            }
        </section>
        )
    }
}
const mapHomeStatetoProps=state=>{
    return {
        songs:state.songs
    }
}
const Home = connect(mapHomeStatetoProps, {
    addList
})(Homepage);

export default Home;