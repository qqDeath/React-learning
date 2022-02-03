import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newSendMessage = React.createRef();
    
  let addMessage = () => {
    props.dispatch({type: "ADD-MESSAGE"});
  };

  let onMessageChange = () => {
    let text = newSendMessage.current.value;
    props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newtext: text});
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newSendMessage}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>send message</button>
        </div>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
