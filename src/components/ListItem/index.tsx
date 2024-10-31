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
  onEdit: (newName: string) => void;
}

const ListItem: React.FC<ListItemProps> = observer(({ item, onDelete, onEdit }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSave = (newName: string) => {
    onEdit(newName);
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
        initialValue={item.name}
      />
    </div>
  );
});

export default ListItem;