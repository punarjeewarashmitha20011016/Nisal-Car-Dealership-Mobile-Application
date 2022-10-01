const express = require("express");
const router = express.Router();
const Car = require("../../models/car.model");

router.post("/", async (req, resp) => {
  try {
    const car = new Car(req.body);
    const res = await car.save();
    console.log(res);
    resp.json(res);
  } catch (err) {
    resp.json({ "message : ": err });
  }
});
router.put("/", async (req, resp) => {
  try {
    let res = await Car.find();
    let obj = undefined;
    let response = undefined;
    res.forEach(async (e) => {
      if (e.carRegNo === req.query.carRegNo) {
        obj = e;
        obj.brand = req.body.brand;
        obj.price = req.body.price;
        obj.date = req.body.date;
        obj.location = req.body.location;
        obj.carImage = req.body.carImage;
        console.log("Obj = ", obj);
        response = e.save(obj);
      }
    });
    resp.json(await response);
  } catch (err) {
    resp.json({ "message : ": err });
  }
});

router.delete("/", async (req, resp) => {
  try {
    let arr = await Car.find();
    let response = undefined;
    arr.forEach(async (e) => {
      if (e.carRegNo === req.query.carRegNo) {
        response = await e.remove();
      }
    });
    resp.json(response);
  } catch (err) {
    resp.json({ "message : ": err });
  }
});

router.get("/", async (req, resp) => {
  try {
    let res = await Car.find();
    resp.json(res);
  } catch (err) {
    resp.json({ message: err });
  }
});

module.exports = router;
