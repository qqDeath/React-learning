import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.herzberghof.ch/wp-content/uploads/2015/02/mt-sample-background-500x200%402x.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
