import "./Feed.css";
import Stories from "../Stories/Stories";
import Posts from "../Posts/Posts";
import Suggestions from "../Suggestions/Suggestions";
import MiniPofile from "../MiniProfile/MiniProfile";

const Feed = () => {
    return (
        // making a container for the feed
        <main className="custom-main-container">
            {/* making two sections for feed with different sub-sections */}
            <section className="custom-first-section">
                {/* this section contains top stories and posts */}
                <Stories />
                <Posts />
            </section>
            <section >
                {/* this section contains top side profile and suggestions */}
                <div className="miniansug">
                    <MiniPofile />
                    <Suggestions />
                </div>
            </section>
        </main>
    )
}

export default Feed
