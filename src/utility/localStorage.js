const getStoredData = (typeName) => {
  const storedData = localStorage.getItem(typeName);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
}

const saveDataList = (typeName, id) => {
  const storedDataList = getStoredData(typeName);
  const exists = storedDataList.find(bookId => bookId === id);
  if (!exists) {
    storedDataList.push(id);
    localStorage.setItem(typeName, JSON.stringify(storedDataList));
  }
  return storedDataList;
}

const getStoredDataReset = (typeName) => {
  localStorage.removeItem(typeName);
  return [];
}

export { getStoredData, saveDataList, getStoredDataReset }