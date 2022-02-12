import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    newPostText: state.newPostText,
    posts: state.profilePage.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
// Better comments
//*  Better Comments
//! Better Comments
//? Better Comments
//TODO Better Comments

//let state = props.store.getState();

/* let AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }; */

/*   const MyPostsContainer = (props) => {
    return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState();
  
          let AddPost = () => {
            store.dispatch(addPostActionCreator());
          };
  
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          };
  
          return (
            <MyPosts
              updateNewPostText={onPostChange}
              addPost={AddPost}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}
            />
          );
        }}
      </StoreContext.Consumer>
    );
  };
   */
