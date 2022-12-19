import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, selectPostById, updatePost } from "../redux/postsSlice";
import { selectAllUsers } from "../redux/usersSlice";

const EditPostForm = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = useSelector((state)=>selectPostById(state,Number(postId)));
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [userId, setUserId] = useState(post?.userId);
    const [requestStatus, setRequestStatus] = useState("idle");

    const dispatch = useDispatch();

    if(!post){
        return (
            <section>
                <h3>Post not found!</h3>
            </section>
        )
    }

    const canSave = [title, content, userId].every(Boolean) && requestStatus==="idle";

    const onSavePostClicked = () => {
        if(canSave){
            try{
                setRequestStatus("pending");
                dispatch(updatePost({ id:post.id, title, body: content, userId, reactions:post.reactions })).unwrap();

                setTitle("");
                setContent("");
                setUserId("");
                navigate(`/post/${postId}`);
            }catch(err){
                console.log("Failed to save the post", err);
            }finally{
                setRequestStatus("idle");
            }
        }
    }

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ));

    const onDeletePostClicked = () => {
        try{
            setRequestStatus("pending");
            dispatch(deletePost({ id:post.id })).unwrap();
            setTitle("");
            setContent("");
            setUserId("");
            navigate("/");
        }catch(err){    
            console.log("Failed to delete the post",err);
        }finally{
            setRequestStatus("idle");
        }
    }

    return (
        <section>
            <h3>Edit Post</h3>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text" 
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}    
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={(e)=>setUserId(Number(e.target.value))}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea 
                    id="postContent" 
                    name="postContent"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)} 
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post 
                </button>
                <button    
                    className="deleteButton"
                    onClick={onDeletePostClicked}
                >
                    Delete Post 
                </button>
            </form>
        </section>
    )
}

export default EditPostForm