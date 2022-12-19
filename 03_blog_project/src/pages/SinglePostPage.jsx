import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import ReactionButtons from "../components/ReactionButtons";
import TimeAgo from "../components/TimeAgo";
import { selectPostById } from "../redux/postsSlice";

const SinglePostPage = () => {
    const { postId } = useParams();
    const post = useSelector((state)=>selectPostById(state,Number(postId)));

    if(!post){
        return (
            <section>
                <h3>Post not found!</h3>
            </section>
        )
    }

    return (
        <article>
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} /> 
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage