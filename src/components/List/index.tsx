import React from "react";
import { observer } from "mobx-react-lite";
import { useDataContext } from "../../contexts/DataContext";
import { List as AntList } from "antd";
import ListItem from "../ListItem";
import Loader from "../Loader";

const List = observer(() => {
  const dataStore = useDataContext();

  return (
    <>
      <AntList
        itemLayout="vertical"
        dataSource={dataStore.data}
        renderItem={(item) => (
          <ListItem
            item={item}
            onDelete={() => dataStore.deleteItem(item.id)}
            onEdit={() => dataStore.editItem(item.id, { name: "Updated Name" })}
          />
        )}
      />
      {dataStore.loading && <Loader />}
    </>
  );
});

export default List;