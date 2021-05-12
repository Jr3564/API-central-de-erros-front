const filterDataValidation = {
  date: (filterDate, array) => {
    // Está acrecentando um dia a menos;
    const filterDateDate = new Date(filterDate);
    filterDateDate.setDate(filterDateDate.getDate() + 1);
    return array.filter(({ eventDate }) => {
      const dataDate = new Date(eventDate);
      return filterDateDate.toDateString() === dataDate.toDateString();
    });
  },
  level: (filtersLevel, array) => array.filter(({ level }) => filtersLevel.includes(level)),
  origin: (filterOrigin, array) => array.filter(({ origin }) => filterOrigin === origin),
};

export default filterDataValidation;
