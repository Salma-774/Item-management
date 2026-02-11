import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ItemRetrieve() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const retrieveAll = async () => {
    const res = await axios.get("http://localhost:8080/items");
    setItems(res.data);
  };

const searchItem = async () => {

  // prevent empty search
  if (!search.trim()) return;

  try {
    const res = await axios.get(`http://localhost:8080/items/${search}`);

    // backend returns ONE object, so convert to array
    setItems([res.data]);

  } catch (err) {
    console.log("Item not found");
    setItems([]);
  }
};

  return (
    <div>

      {/* DIVIDER */}
      <div className="sn-divider"></div>

      {/* SEARCH BAR */}
      <div className="sn-search-bar">
       <input
  placeholder="Search by ID..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
/>

        <button className="sn-btn-outline" onClick={searchItem}>
          Search
        </button>

        <button className="sn-btn-primary" onClick={retrieveAll}>
          Retrieve All
        </button>
      </div>

      {/* SERVICENOW LIST VIEW */}
      <div className="sn-table-container">

        <div className="sn-table-header">
          <span>ID</span>
          <span>Name</span>
          <span>Description</span>
          <span>Category</span>
          <span>Price</span>
        </div>

        {items.map(item => (
          <motion.div key={item.id} className="sn-table-row">
            <span className="sn-link">{item.id}</span>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>{item.category}</span>
            <span>₹ {item.price}</span>
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default ItemRetrieve;