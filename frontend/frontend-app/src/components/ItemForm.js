import React, { useState } from "react";
import axios from "axios";

function ItemForm() {

  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    price: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!item.name.trim()) newErrors.name = "Name is required";
    if (!item.description.trim()) newErrors.description = "Description is required";
    if (!item.category.trim()) newErrors.category = "Category is required";
    if (!item.price) newErrors.price = "Price is required";
    else if (item.price <= 0) newErrors.price = "Price must be positive";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    await axios.post("https://item-backend-puhm.onrender.com/items", item);

    setItem({ name: "", description: "", category: "", price: "" });
    setErrors({});
  };

return (
  <form onSubmit={handleSubmit} className="sn-form-two-col">

    {/* LEFT COLUMN */}
    <div className="sn-col">

      <div className="sn-field">
        <label>Name</label>
        <input
          name="name"
          value={item.name}
          onChange={handleChange}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </div>

      <div className="sn-field">
        <label>Category</label>
        <input
          name="category"
          value={item.category}
          onChange={handleChange}
          className={errors.category ? "error-input" : ""}
        />
        {errors.category && <small className="error-text">{errors.category}</small>}
      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="sn-col">

      <div className="sn-field">
        <label>Description</label>
        <input
          name="description"
          value={item.description}
          onChange={handleChange}
          className={errors.description ? "error-input" : ""}
        />
        {errors.description && <small className="error-text">{errors.description}</small>}
      </div>

      <div className="sn-field">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          className={errors.price ? "error-input" : ""}
        />
        {errors.price && <small className="error-text">{errors.price}</small>}
      </div>

      {/* ✅ BUTTON MOVED INSIDE RIGHT COLUMN */}
      <button className="sn-btn-primary add-btn">
        Add Item
      </button>

    </div>

  </form>
);
}

export default ItemForm;