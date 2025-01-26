import React from "react";

const EditItemModal = ({ editItem, setEditItem, handleEditItem, categories }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "quantity" && !/^\d*$/.test(value)) {
      return; // Allow only digits for quantity
    }
    setEditItem({ ...editItem, [name]: value });
  };

  const handleSave = () => {
    handleEditItem(editItem.id, editItem);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Item</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={editItem.name}
            onChange={handleChange}
          />
          <select
            name="category"
            value={editItem.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={editItem.quantity}
            onChange={handleChange}
          />
          <div className="modal-actions">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={() => setEditItem(null)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
