
const mockDataDonate = [
  {
    id: 1,
    itemName: "Winter Jacket",
    itemDescription: "A warm winter jacket in excellent condition.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwwHMZHueGLGjB9ugjCLgOLnTwr4zxtBkNQ&s",
  },
  {
    id: 2,
    itemName: "Kitchen Utensils",
    itemDescription: "A set of pots and pans, lightly used.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    itemName: "Children's Toys",
    itemDescription: "A variety of toys suitable for ages 3-8.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export const addItemToMockDataDonate = (item, updateItems) => {
  const newItem = { id: mockDataDonate.length + 1, ...item };
  updateItems(newItem); // Call the state update function
};


export default mockDataDonate;
