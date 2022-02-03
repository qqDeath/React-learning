import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="http://sun9-74.userapi.com/s/v1/ig2/WNK5rAvLhR0SXGkDH-VgPDr9Hs-MjgNtKkzfmJ4Km14oWk7opxNkng6aJQYNDIrBEZUhUXn7y7WiiGXpoiQtLPnZ.jpg?size=400x400&quality=96&crop=0,0,750,750&ava=1"></img>
      {props.message}
      <div>
        <span>like {props.likeCounter}</span>
      </div>
    </div>
  );
};

export default Post;
