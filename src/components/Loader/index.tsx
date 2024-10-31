import React from "react";
import { Spin } from "antd";

const Loader: React.FC = () => (
  <div style={{ textAlign: "center", marginTop: 20 }}>
    <Spin />
  </div>
);

export default Loader;