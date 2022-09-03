const Purchase = require("../purchase.model");
const PurchaseDto = (result, index = 0) => {
  return Purchase(
    result.rows[index].id,
    result.rows[index].users_id,
    result.rows[index].cars_id,
    result.rows[index].amount,
  );
};

module.exports = PurchaseDto;