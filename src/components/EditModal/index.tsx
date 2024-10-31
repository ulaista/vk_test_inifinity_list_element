import React, { useState } from "react";
import { Modal, Input } from "antd";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newName: string) => void;
  initialValue: string;
}

const EditModal: React.FC<EditModalProps> = ({ open, onClose, onSave, initialValue }) => {
  const [value, setValue] = useState(initialValue);

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
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </Modal>
  );
};

export default EditModal;
