import { useEffect } from "react";
import { useDataContext } from "../contexts/DataContext";
import { runInAction } from "mobx";

export const useFetchData = () => {
  const dataStore = useDataContext();

  useEffect(() => {
    runInAction(() => {
      dataStore.fetchData();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};