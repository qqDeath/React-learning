import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://cq-esports.com/storage/uploads/players/1144139/1.png",
        followed: true,
        fullName: "Kolyan",
        status: "Ok maannnn...",
        location: { city: "Azov", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://cq-esports.com/storage/uploads/players/1144139/1.png",
        followed: false,
        fullName: "K0lyan1",
        status: "Ok maannnn...",
        location: { city: "Azov", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://cq-esports.com/storage/uploads/players/1144139/1.png",
        followed: true,
        fullName: "Kolyan2",
        status: "Ok maannnn...",
        location: { city: "Azov", country: "Russia" },
      },
      {
        id: 4,
        photoUrl:
          "https://cq-esports.com/storage/uploads/players/1144139/1.png",
        followed: false,
        fullName: "Kolyan3",
        status: "Ok maannnn...",
        location: { city: "Azov", country: "Russia" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
