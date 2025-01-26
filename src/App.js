import React, { useState } from "react";
import AddEditItemForm from "./components/AddEditItemForm"; 
import Filters from "./components/Filters"; 
import InventoryTable from "./components/InventoryTable"; 
import InventoryCards from "./components/InventoryCards"; 
import EditItemModal from "./components/EditItemModal"; 
import './App.css'; 

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruits", quantity: 5 },
    { id: 2, name: "Carrot", category: "Vegetables", quantity: 15 },
    { id: 3, name: "Milk", category: "Dairy", quantity: 8 },
  ]);

  const [categories, setCategories] = useState(["Fruits", "Vegetables", "Dairy"]);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: "",
  });
  const [editItem, setEditItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddItem = () => {
    if (newItem.name && newItem.category && newItem.quantity) {
      setItems([
        ...items,
        { id: Date.now(), ...newItem, quantity: Number(newItem.quantity) },
      ]);
      if (!categories.includes(newItem.category)) {
        setCategories([...categories, newItem.category]);
      }
      setNewItem({ name: "", category: "", quantity: "" });
      setSuccessMessage("Item added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditItem = (id, updatedItem) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setEditItem(null);
    setSuccessMessage("Item updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
  };

  const handleEditClick = (item) => {
    setEditItem(item);
  };

  const filteredItems = items.filter((item) =>
    filterCategory ? item.category === filterCategory : true
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === "asc") return a.quantity - b.quantity;
    else return b.quantity - a.quantity;
  });

  return (
    <div className="container">
      <h1>Inventory Management</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <AddEditItemForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItem={handleAddItem}
        handleEditItem={handleEditItem}
        editItem={editItem}
        categories={categories}
      />
      <Filters
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categories={categories}
      />
      <InventoryTable
        sortedItems={sortedItems}
        handleEditItem={handleEditItem}
        handleEditClick={handleEditClick}
        handleDeleteItem={handleDeleteItem}
      />
      <InventoryCards
        sortedItems={sortedItems}
        handleEditItem={handleEditItem}
        handleEditClick={handleEditClick}
        handleDeleteItem={handleDeleteItem}
      />
      {editItem && (
        <EditItemModal
          editItem={editItem}
          setEditItem={setEditItem}
          handleEditItem={handleEditItem}
          categories={categories}
        />
      )}
    </div>
  );
};

export default App;
