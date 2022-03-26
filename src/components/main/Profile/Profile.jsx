import React, {useState} from 'react';

import classes from './Profile.module.css'

import Post from "../Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TetxArea";
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profilePageReducer";

const Profile = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.profilePageReducer.posts)

    const [newPost, setNewPost] = useState('')

    const onSetNewPost = (event) => {
        setNewPost(event.target.value)
    }

    const sendNewPost = () => {
        try {
            let newPostSend = {
                id: Date.now(),
                text: newPost,
                name: 'Max Zhovtaniuk',
                likes: 0
            }
            if (!newPost.trim()) {
                throw new Error("Empty post")
            }
            let newPostAction = addPostActionCreator(newPostSend)
            dispatch(newPostAction)
        } catch (error) {
            console.error(error)
        } finally {
            setNewPost('')
        }
    }

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo/>
            <div className={classes.inputNewPost}>
                <TextArea value={newPost} onChange={onSetNewPost}/>
                <Button onClick={sendNewPost} style={{marginTop: ".5rem"}} endIcon={<SendIcon/>}>Post</Button>
            </div>
            <div className={classes.postsWrapper}>{posts.map(post => <Post key={post.id} postInfo={post}/>)}</div>
        </div>

    )
}

export default Profile;