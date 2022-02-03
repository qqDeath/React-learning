const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likeCounter: 2 },
        { id: 2, message: "It's my second post", likeCounter: 25 },
        { id: 3, message: "Heretic Anthem", likeCounter: 666 },
        { id: 4, message: "joass", likeCounter: 32 },
      ],
      newPostText: "Enter text here",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Kolyan" },
        { id: 2, name: "Kolyan1" },
        { id: 3, name: "Kolyan2" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Fuck it all!" },
      ],
      newMessageText: "Enter text here",
    },
    sidebar: {},
  }, // _state = private, don't use it in the global world \\ use getState()
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state; //this == store (can be changed)
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer
  },

  /* addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCounter: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  }, */
  dispatch(action) {
    //action {type : 'ADD-POST'} always have a type
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCounter: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;

window.store = store;
