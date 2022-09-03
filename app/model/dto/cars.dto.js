const Cars = require("../cars");
const CarsDto = (result, index = 0) => {
  return Cars(
    result.rows[index].id,
    result.rows[index].name,
    result.rows[index].brand,
    result.rows[index].price,
    result.rows[index].status,
  );
};

module.exports = CarsDto;