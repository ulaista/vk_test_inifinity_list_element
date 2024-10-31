import React, { useState } from "react";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import EditModal from "../EditModal";
import dataStore from "../../stores/DataStore";

interface ListItemProps {
  item: any;
  onDelete: ()=> void;
  onEdit: ()=> void;
}

const ListItem: React.FC<ListItemProps> = observer(({ item }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleEdit = (newName: string) => {
    dataStore.editItem(item.id, { name: newName });
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <Button onClick={() => setModalVisible(true)}>Edit</Button>
      <Button onClick={() => dataStore.deleteItem(item.id)}>Delete</Button>

      <EditModal
        open={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleEdit}
        initialValue={item.name}
      />
    </div>
  );
});

export default ListItem;