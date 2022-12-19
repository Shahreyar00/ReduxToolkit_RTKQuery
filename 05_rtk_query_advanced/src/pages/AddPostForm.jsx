import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "../redux/postsSlice";
import { selectAllUsers } from "../redux/usersSlice";

const AddPostForm = () => {
    const [addNewPost, { isLoading }] = useAddNewPostMutation();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const users = useSelector(selectAllUsers);

    const canSave = [title, content, userId].every(Boolean) && !isLoading;

    const onSavePostClicked = async() => {
        if(canSave){
            try{
                await addNewPost({ title, body: content, userId }).unwrap();
                
                setTitle("");
                setContent("");
                setUserId("");
                navigate("/");
            }catch(err){
                console.log("Failed to save the post!", err);
            }
        }
    }

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h3>Add a New Post:</h3>
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
                <select id="postAuthor" value={userId} onChange={(e)=>setUserId(e.target.value)}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea 
                    name="postContent" 
                    id="postContent"
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
            </form>
        </section>
    )
}

export default AddPostForm