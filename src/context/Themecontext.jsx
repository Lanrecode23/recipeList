import { createContext, useReducer } from "react";

export const Themecontext = createContext();

// create logic
const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  // use reducer from react
  const [state, dispatch] = useReducer(ThemeReducer, {
    color: "#58249c",
    mode: "light"
  });

  // function to handle change color
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  //function to handle the change of mode either dark or light
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  }

  return (
    <Themecontext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </Themecontext.Provider>
  );
}
