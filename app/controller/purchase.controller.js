const db = require("../manager/infra.manager");
const DbQuery = require("../utils/query");
const {errorResponse, successResponse} = require("../utils/Response");


const newPurchase = async (req, res) => {
    try {
      const {users_id, cars_id, amount} = req.body;
      const carPrice = await db.query("SELECT * from cars where id=$1", [cars_id]);
      const prices = carPrice.rows[0].price;
      if(amount<prices)
      return res.status(404).json(errorResponse("Your money is not enough pantek"));
      const change = amount - prices;
      const result = await db.query(
        `INSERT into purchase (users_id, cars_id, amount) values ($1,$2,$3) RETURNING *`,
        [users_id, cars_id, amount]
      );
      const status = "soldout"
      const carStatus = await db.query(`UPDATE cars SET status=$1 where id=$2 RETURNING *`, [status, cars_id])
      if(amount >= prices )
      res.status(201).json(successResponse(`Success Add new Purchase, your change: ${change}`, result.rows));
    } catch (error) {
      res.status(500).json(errorResponse(error.message));
    }
  };

const listPurchase = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT id,users_id,cars_id,amount from purchase order by id asc", 
      []
  )
  res.status(201).json(successResponse(result.rows));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

module.exports = {newPurchase, listPurchase};