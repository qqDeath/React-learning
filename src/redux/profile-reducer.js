const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likeCounter: 2 },
    { id: 2, message: "It's my second post", likeCounter: 25 },
    { id: 3, message: "Heretic Anthem", likeCounter: 666 },
    { id: 4, message: "joass", likeCounter: 32 },
  ],
  newPostText: "Enter text here",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCounter: 0,
      };

      let stateCopy = { ...state }; //*shallow state copy

      stateCopy.posts = [...state.posts]; //* deep copy
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
