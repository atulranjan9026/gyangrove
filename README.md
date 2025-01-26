# Inventory Management App

This is a simple inventory management application built with React. It allows users to add, edit, delete, and filter inventory items. The application also provides a visual representation of the inventory items in both table and card views.

## Features

- Add new inventory items
- Edit existing inventory items
- Delete inventory items
- Filter items by category
- Sort items by quantity
- Visual representation of items in table and card views
- Success and error messages for user actions

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/inventory-management-app.git
   cd inventory-management-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
inventory-management-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddEditItemForm.js
│   │   ├── EditItemModal.js
│   │   ├── Filters.js
│   │   ├── InventoryCards.js
│   │   ├── InventoryTable.js
│   │   └── ...
│   ├── App.css
│   ├── InventoryApp.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Components

- **AddEditItemForm**: Form for adding and editing inventory items.
- **EditItemModal**: Modal for editing inventory items.
- **Filters**: Component for filtering and sorting items.
- **InventoryCards**: Component for displaying items in card view.
- **InventoryTable**: Component for displaying items in table view.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.