import React from "react";

const InventoryCards = ({ sortedItems, handleEditItem, handleEditClick, handleDeleteItem }) => {
  return (
    <div className="cards-container">
      {sortedItems.map((item) => (
        <div key={item.id} className={`card ${item.quantity < 10 ? "low-stock" : ""}`}>
          <h2>{item.name}</h2>
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
          <div className="action-buttons">
            <button
              className="edit"
              onClick={() => handleEditClick(item)}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryCards;
