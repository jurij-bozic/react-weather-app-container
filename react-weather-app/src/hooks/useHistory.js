import { useEffect, useState } from "react";


export const useHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const currentHistory = localStorage.getItem("history");
    if (currentHistory && currentHistory.length > 0) {
      setHistory(JSON.parse(currentHistory));
    } 
    else {
      setHistory(history);
      localStorage.setItem("history", JSON.stringify(history));
    }
  }, []);

  const modifyHistory = (newHistory) => {
    if (history && history.length >= 5) {
      history.splice(0, 1);
    }
    setHistory([ ...history, newHistory ]);
    localStorage.setItem(
      "history",
      JSON.stringify([ ...history, newHistory ])
    );
  };

  return {
    history,
    modifyHistory
  };
};
