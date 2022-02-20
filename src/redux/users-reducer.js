const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    /* {
      id: 1,
      photoUrl: "https://cq-esports.com/storage/uploads/players/1144139/1.png",
      followed: true,
      fullName: "Kolyan",
      status: "Ok maannnn...",
      location: { city: "Azov", country: "Russia" },
    },
    {
      id: 2,
      photoUrl: "https://cq-esports.com/storage/uploads/players/1144139/1.png",
      followed: false,
      fullName: "K0lyan1",
      status: "Ok maannnn...",
      location: { city: "Azov", country: "Russia" },
    },
    {
      id: 3,
      photoUrl: "https://cq-esports.com/storage/uploads/players/1144139/1.png",
      followed: true,
      fullName: "Kolyan2",
      status: "Ok maannnn...",
      location: { city: "Azov", country: "Russia" },
    },
    {
      id: 4,
      photoUrl: "https://cq-esports.com/storage/uploads/players/1144139/1.png",
      followed: false,
      fullName: "Kolyan3",
      status: "Ok maannnn...",
      location: { city: "Azov", country: "Russia" },
    }, */
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
