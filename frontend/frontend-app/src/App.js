import React from "react";
import { motion } from "framer-motion";
import ItemForm from "./components/ItemForm";
import ItemRetrieve from "./components/ItemRetrieve";
import "./App.css";

function App() {
  return (
    <div className="container mt-4">

      <motion.h2
        className="text-center mb-4"
        initial={{opacity:0}}
        animate={{opacity:1}}
      >
        Item Management
      </motion.h2>

      {/* SECTION 1 : ADD ITEM */}
      <motion.div
        className="sn-card mb-4"
        initial={{x:-30,opacity:0}}
        animate={{x:0,opacity:1}}
      >
        <h5 className="sn-section-title">Add New Item</h5>
        <ItemForm/>
      </motion.div>

      {/* SECTION 2 : RETRIEVE DATA */}
      <motion.div
        className="sn-card"
        initial={{x:30,opacity:0}}
        animate={{x:0,opacity:1}}
      >
        <h5 className="sn-section-title">Retrieve Items</h5>
        <ItemRetrieve/>
      </motion.div>

    </div>
  );
}

export default App;