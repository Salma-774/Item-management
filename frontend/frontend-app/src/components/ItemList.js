import React,{useEffect,useState} from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ItemList(){

  const [items,setItems]=useState([]);
  const [search,setSearch]=useState("");
  const [filtered,setFiltered]=useState([]);

  useEffect(()=>{
    fetchItems();
  },[]);

  const fetchItems=async()=>{
    const res=await axios.get("https://item-backend-puhm.onrender.com/items");
    setItems(res.data);
    setFiltered(res.data);
  };

  const handleSearch=()=>{
    const result = items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  };

  return(
    <div>

      {/* SEARCH BAR */}
      <div className="sn-search mb-3">
        <input
          placeholder="Search items..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <motion.button
          className="sn-btn"
          whileTap={{scale:0.95}}
          onClick={handleSearch}
        >
          Search
        </motion.button>
      </div>

      {filtered.map(item=>(
        <motion.div
          key={item.id}
          className="sn-card mb-2"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
        >
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          <small>{item.category}</small>
          <h6>₹ {item.price}</h6>
        </motion.div>
      ))}

    </div>
  )
}

export default ItemList;