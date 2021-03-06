import React from 'react';

import classes from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TextArea/TetxArea";
import PostsList from "../../../UI/Posts/PostsList";

const Profile = ({
                     sendFriendshipRequestHandler,
                     isOwner,
                     isFriend,
                     userPosts,
                     userInfo,
                     newPost,
                     setNewPost,
                     addNewPost
                 }) => {
    const newPostHandler = (event) => {
        setNewPost(event.target.value)
    }
    return (
        <div className={classes.profileWrapper}>
            <div className={classes.container}>
                <ProfileInfo profileInfo={userInfo} isOwner={isOwner} isFriend={isFriend}
                             sendFriendshipRequestHandler={sendFriendshipRequestHandler}/>

                {
                    isOwner
                        ?
                        <div className={classes.inputNewPost}>
                            <TextArea value={newPost} onChange={newPostHandler}/>
                            <Button onClick={addNewPost} style={{marginTop: ".5rem"}}
                                    endIcon={<SendIcon/>}>Post</Button>
                        </div>
                        : ''
                }

                {
                    userPosts.length !== 0
                        ? <PostsList postsList={userPosts}/>
                        : "This user has not posts yet"
                }
            </div>
        </div>
    )
}

export default Profile;