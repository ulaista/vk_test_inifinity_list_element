import React from "react";
import List from "../../components/List";
import { Select } from "antd";
import { useDataContext } from "../../contexts/DataContext";
import { useFetchData, useInfiniteScroll } from "../../hooks";

const { Option } = Select;

const Home: React.FC = () => {
  const dataStore = useDataContext();
  useFetchData();
  useInfiniteScroll(dataStore.fetchData);

  return (
    <div>
      <Select
        defaultValue="stars"
        onChange={(value) => dataStore.setSortField(value)}
        style={{ width: 200, marginBottom: 20 }}
      >
        <Option value="stars">Stars</Option>
        <Option value="forks">Forks</Option>
        <Option value="updated">Updated</Option>
      </Select>
      <List />
    </div>
  );
};

export default Home;