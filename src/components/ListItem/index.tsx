import React from "react";
import { Button } from "antd";

const ListItem: React.FC<{ item: any; onDelete: () => void; onEdit: () => void }> = ({ item, onDelete, onEdit }) => (
  <div>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <Button onClick={onEdit}>Edit</Button>
    <Button onClick={onDelete}>Delete</Button>
  </div>
);

export default ListItem;