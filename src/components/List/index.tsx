import React from "react";
import { observer } from "mobx-react-lite";
import { useDataContext } from "../../contexts/DataContext";
import { List as AntList } from "antd";
import ListItem from "../ListItem";
import Loader from "../Loader";
import styles from "./List.module.css";

const List: React.FC = observer(() => {
  const dataStore = useDataContext();

  return (
    <div className={styles.container}>
      <AntList
        itemLayout="vertical"
        dataSource={dataStore.data}
        renderItem={(item) => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={() => dataStore.deleteItem(item.id)}
            onEdit={(updatedFields) => dataStore.editItem(item.id, updatedFields)}
          />
        )}
      />
      {dataStore.loading && <Loader />}
    </div>
  );
});

export default List;