const getStorage = (key) => {
  if (localStorage.getItem(key)) {
    return (JSON.parse(localStorage.getItem(key)));
  }
  return '';
};

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default { getStorage, setStorage };
