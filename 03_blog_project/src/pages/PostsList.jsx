import React from "react";
import { useSelector } from "react-redux";
import { getPostsStatus, getPostsError, selectPostIds } from "../redux/postsSlice";
import PostsExcerpt from "../components/PostsExcerpt";

const PostsList = () => {
    // const posts = useSelector(selectAllPosts);
    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if(postStatus==="loading"){
        content = <p>"Loading..."</p>
    } else if(postStatus==="succeeded"){
        // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)    } else if(postStatus==="failed"){
        content = <p>{error}</p>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList