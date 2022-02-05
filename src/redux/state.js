import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageBody: "",
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
  dispatch(action) {
    //action {type : 'ADD-POST'} always have a type

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
