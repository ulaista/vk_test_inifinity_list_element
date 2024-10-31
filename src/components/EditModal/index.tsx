import React, { useState, useEffect } from "react";
import { Modal, Input, Form } from "antd";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedFields: { [key: string]: string }) => void;
  initialValues: { [key: string]: string };
}

const EditModal: React.FC<EditModalProps> = ({ open, onClose, onSave, initialValues }) => {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (field: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(values);
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSave();
    }
  };

  return (
    <Modal
      title="Edit Item"
      open={open}
      onOk={handleSave}
      onCancel={onClose}
    >
      <div onKeyDown={handleKeyDown}>
        <Form layout="vertical">
          {Object.keys(initialValues).map((field) => (
            <Form.Item key={field} label={field.charAt(0).toUpperCase() + field.slice(1)}>
              <Input
                value={values[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder={`Enter new ${field}`}
              />
            </Form.Item>
          ))}
        </Form>
      </div>
    </Modal>
  );
};

export default EditModal;
