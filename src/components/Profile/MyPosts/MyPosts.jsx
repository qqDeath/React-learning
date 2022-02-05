import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCounter={p.likeCounter} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
