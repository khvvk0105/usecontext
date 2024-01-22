import React, { Children, createContext, useContext } from "react";
const QuestionContext = createContext();
export const QuestionProvider = (children) => {
  return (
    <QuestionContext.Provider value={{ data, setData }}>
      {children}
    </QuestionContext.Provider>
  );
};
