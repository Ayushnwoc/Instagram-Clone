import "./Feed.css";
import Stories from "../Stories/Stories";
import Posts from "../Posts/Posts";
import Suggestions from "../Suggestions/Suggestions";
import MiniPofile from "../MiniProfile/MiniProfile";

const Feed = () => {
    return (
        <main className="custom-main-container">
            <section className="custom-first-section">
                <Stories />
                <Posts />
            </section>
            <section className="">
                <div className="miniansug">
                    <MiniPofile />
                    <Suggestions />
                </div>
            </section>
        </main>


    )
}

export default Feed
