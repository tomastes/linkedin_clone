import {
  CalendarViewDayRounded,
  CreateOutlined,
  EventNote,
  ImageRounded,
  SubscriptionsOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import firebase from 'firebase'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move'
const Feed = () => {
  const [posts, setPosts] = useState([]);
const user = useSelector(selectUser)
  const [input,setInput] = useState('')
  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const sendPost = (e) => {
      
    e.preventDefault();
    if(!input){
        return
    }
    db.collection('posts').add({
        name:user.displayName,
        description:user.email,
        message:input,
        photoUrl:user.photoUrl,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  };
  return (
    <div className="feed">
      {/* input */}
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateOutlined />
          <form action="">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} name="" id="" />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          {/* componnet */}
          <InputOptions Icon={ImageRounded} title="photo" color="#70b5f9" />
          <InputOptions
            Icon={SubscriptionsOutlined}
            title="video"
            color="#e7a33e"
          />
          <InputOptions Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOptions
            Icon={CalendarViewDayRounded}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* posts */}
      <FlipMove>


      {posts.map(({id,data:{name,description,message,photoUrl}}) => (
        <Post
        key={id}
        name={name}
        description={description}
        photoUrl={photoUrl}
        message={message} />
      ))}
            </FlipMove>
      
    </div>
  );
};

export default Feed;
