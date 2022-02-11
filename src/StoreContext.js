import react from "react";

const StoreContext = react.createContext(null);

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;