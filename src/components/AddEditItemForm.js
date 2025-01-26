import React, { useState } from "react";

const AddEditItemForm = ({ newItem, setNewItem, handleAddItem, handleEditItem, editItem }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      setNewItem({ ...newItem, quantity: value });
    }
  };

  const handleSubmit = () => {
    if (!newItem.name || !newItem.category || !newItem.quantity) {
      setErrorMessage("All fields are required.");
      return;
    }
    if (editItem) {
      handleEditItem(editItem.id, newItem);
    } else {
      handleAddItem();
    }
    setErrorMessage("");
  };

  return (
    <div className="form-container">
      <h2>{editItem ? "Edit Item" : "Add New Item"}</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleQuantityChange}
        />
        <button
          type="button"
          onClick={handleSubmit}
        >
          {editItem ? "Update Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddEditItemForm;
