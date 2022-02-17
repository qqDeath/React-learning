import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import React from "react";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onNewMessageChange}
            value={newMessageBody}
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>send message</button>
        </div>
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
