import React from "react";
import { useSelector } from "react-redux";
import { selectPostIds } from "../redux/postsSlice";
import { useGetPostsQuery } from "../redux/postsSlice";
import PostsExcerpt from "../components/PostsExcerpt";

const PostsList = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error 
    } = useGetPostsQuery();

    const orderedPostIds = useSelector(selectPostIds);

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default PostsList