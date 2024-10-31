import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import styles from "./EditModal.module.css";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newName: string) => void;
  initialValue: string;
}

const EditModal: React.FC<EditModalProps> = ({ open, onClose, onSave, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSave = () => {
    onSave(value);
    onClose();
  };

  return (
    <Modal
      title="Edit Item"
      open={open}
      onOk={handleSave}
      onCancel={onClose}
    >
      <div className={styles.modal}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter new name"
        />
      </div>
    </Modal>
  );
};

export default EditModal;
