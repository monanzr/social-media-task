import React, { useContext, useMemo } from "react";
import DataContext from "../context/provider";

const useCollapse = () => {
  const { collapseOpen, setCollapseOpen } = useContext(DataContext);

  return {
    getCollapseOpen: useMemo(() => collapseOpen, [collapseOpen]),
    
    onCollapseOpen: () => {
        setCollapseOpen(true)
    },

    onCollapseClose: () => {
        setCollapseOpen(false)
    },

    toggleOpenForm: () => {
        setCollapseOpen((prevOpenForm) => !prevOpenForm);
      }
  };
};

export default useCollapse;
