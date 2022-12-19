import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "../components/PostAuthor";
import ReactionButtons from "../components/ReactionButtons";
import TimeAgo from "../components/TimeAgo";
import { selectAllPosts } from "../redux/postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,120)}</p> 
            <div className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2>Posts:</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList