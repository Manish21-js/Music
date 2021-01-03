
const PlaylistItem=props=>{
    return(
        <div>
        {props.playList.map((item,index)=>(
            <article key={index} className="playlist border-box" onClick={()=>props.editPlayList(item)}>
                <span>Playlist: {item.label}</span><br/>
                <span>created: {item.created} </span>
            </article>
        ))}
        </div>
    )
}
export default PlaylistItem;