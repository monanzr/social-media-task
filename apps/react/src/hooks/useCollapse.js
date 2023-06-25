import React, { useContext, useMemo } from "react";
import DataContext from "../context/provider";
import { useDispatch, useSelector } from "react-redux";
import { setCollapseOpen } from "../features/collapse/collapseSlice";

const useCollapse = () => {
  // const { collapseOpen, setCollapseOpen } = useContext(DataContext);

  const collapseOpenDispatch = useDispatch()

  return {
    getCollapseOpen: useSelector(state => state.collapse.collapseOpen),
    
    onCollapseOpen: () => {
      collapseOpenDispatch(setCollapseOpen(true))
    },

    onCollapseClose: () => {
      collapseOpenDispatch(setCollapseOpen(false))
    },

    toggleOpenForm: () => {
      collapseOpenDispatch(setCollapseOpen((prevOpenForm) => !prevOpenForm));
      }
  };
};

export default useCollapse;
