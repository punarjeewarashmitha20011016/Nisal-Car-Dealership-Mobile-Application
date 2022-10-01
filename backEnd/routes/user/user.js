const express = require("express");
const router = express.Router();
const User = require("../../models/user.model");

router.post("/", async (req, resp) => {
  try {
    const user = new User(req.body);
    const res = await user.save();
    console.log(res);
    resp.json(res);
  } catch (err) {
    resp.json({ "message : ": err });
  }
});
router.put("/", async (req, resp) => {
  try {
    let res = await User.find();
    let obj = undefined;
    let response = undefined;
    res.forEach(async (e) => {
      if (e.id === req.query.id) {
        obj = e;
        obj.name = req.body.name;
        obj.email = req.body.email;
        obj.password = req.body.password;
        console.log(obj);
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
    let arr = await User.find();
    let response = undefined;
    arr.forEach(async (e) => {
      if (e.id === req.query.id) {
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
    let res = await User.find();
    resp.json(res);
  } catch (err) {
    resp.json({ message: err });
  }
});
module.exports = router;
