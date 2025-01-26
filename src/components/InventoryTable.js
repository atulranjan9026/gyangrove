import React from "react";

const InventoryTable = ({ sortedItems, handleEditItem, handleEditClick, handleDeleteItem }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id} className={item.quantity < 10 ? "low-stock" : ""}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td className="action-buttons">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
