const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues)
}

const updateItemInArray = (array, itemId, updateItemCallback) => {
  const updatedItems = array.map(item => {
    // Preserve all items apart from the one we want to change
    if (item.id !== itemId) return item
    // Use the provided callback function to create the updated item
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })
  return updatedItems
}

export { updateObject, updateItemInArray }
