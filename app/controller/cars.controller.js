const db = require("../manager/infra.manager");
const {errorResponse, successResponse} = require("../utils/Response");

const addCar = async (req, res) => {
  try {
    const {name, brand, price} = req.body;
    const status = "available";
    const result = await db.query(
      "INSERT INTO cars (name, brand, price, status) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, brand, price, status]
    );
    res.status(201).json(successResponse("Success Add a new Car", result.rows));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

const listCar = async (req, res) => {
    try {
        // const {name, brand, price, status} = req.query;
        const result = await db.query(
            "SELECT id,name,brand,price,status from cars order by id asc", 
            []
        )
        res.status(201).json(successResponse(result.rows));
    } catch (error) {
        res.status(500).json(errorResponse(error.message));
    }
}

const removeCar = async (req, res) => {
  try {
    // const id = req.params;
    // console.log(id);
    const {id} = req.params;
    const result = await db.query("DELETE FROM cars WHERE id=$1 RETURNING *", [id]);
    console.log(result);
    if (result.rowCount == 0)
        return res.status(404).json(errorResponse(`Cars with ID ${id} not found`));
        res.status(200).json(successResponse(`Success Remove Cars from List`, result.rows));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

const updateCar = async (req, res) => {
    
    try {
        const {id} = req.body;
        if(!id) 
        return res.status(404).json(errorResponse(`Cars with ID ${id} not found`));
        const status = "soldout"
        const result = await db.query(`UPDATE cars SET status=$1 where id=$2 RETURNING *`,[status, id])
        res.status(200).json(successResponse(`Success Update Cars from List`, result.rows));
    } catch (error) {
        res.status(500).json(errorResponse(error.message));
    }
}

module.exports = {addCar, listCar, removeCar, updateCar};
