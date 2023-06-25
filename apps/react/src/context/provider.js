import React, { createContext, useReducer, useState, useEffect } from "react";
import { INITIAL_STATE } from "./initial";
import { socialMediaReducer } from "./reducer";
import { getSocialMediaAPI } from '../api/getSocialMedia';

const DataContext = createContext();

export const DataProvider = (props) => {
  const [socialMediaState, socialMediaDispatch] = useReducer(socialMediaReducer, INITIAL_STATE);
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <DataContext.Provider
      value={{
        socialMediaState,
        socialMediaDispatch,
        collapseOpen,
        setCollapseOpen
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
