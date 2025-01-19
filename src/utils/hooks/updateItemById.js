export function updateItemById(id, updatedFields, data) {
  const newData = { ...data };

  for (const category in newData) {
    const categoryData = newData[category];

    const updatedItems = categoryData.items.map((item) => {
      if (item.id === id) {
        return { ...item, ...updatedFields };
      }
      return item;
    });
    if (JSON.stringify(updatedItems) !== JSON.stringify(categoryData.items)) {
      newData[category] = {
        ...categoryData,
        items: updatedItems,
      };
      return newData;
    }
  }
}
