import React, { useState } from "react";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import EditModal from "../EditModal";
import styles from "./ListItem.module.css";

interface ListItemProps {
  item: {
    id: number;
    name: string;
    description: string;
  };
  onDelete: () => void;
  onEdit: (updatedFields: { [key: string]: string }) => void;
}

const ListItem: React.FC<ListItemProps> = observer(({ item, onDelete, onEdit }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSave = (updatedFields: { [key: string]: string }) => {
    onEdit(updatedFields);
    setModalVisible(false);
  };

  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{item.name}</h3>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.actions}>
        <Button className={styles.button} onClick={() => setModalVisible(true)}>
          Edit
        </Button>
        <Button className={`${styles.button} ${styles.delete}`} onClick={onDelete}>
          Delete
        </Button>
      </div>
      <EditModal
        open={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
        initialValues={{ name: item.name, description: item.description }}
      />
    </div>
  );
});

export default ListItem;