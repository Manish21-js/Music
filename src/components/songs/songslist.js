import React from "react";
const SongsList=props=>{
    return(
        <React.Fragment>
            {props.list.map((song,index)=>(
                 <article key={index} className="song border-box">
                     <div className="icon">
                        <img src={song.thumbnailUrl} alt="img"/>
                     </div>
                     <div className="description">
                        <div><span className="">Song : </span> {song.id}</div>
                        <div><span className="">Title : </span> <i>{song.title}... </i> </div>
                     </div>
                     {props.clickActionLabel && !props.mapID[song.id] &&
                        <div className="action-btn">
                            <button onClick={()=>props.clickAction(song)}>{props.clickActionLabel}</button>
                        </div>
                    }
                </article>
            ))}
        </React.Fragment>
    )
}
export default SongsList;