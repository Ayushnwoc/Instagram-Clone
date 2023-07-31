import "./Story.css"

const Story = ({ img, username }) => {

    return(
        <div className="story">
            <img className="storyImg" src={img} alt="" />
            <p className="storyP">{username}</p>
        </div>
    )
}

export default Story;