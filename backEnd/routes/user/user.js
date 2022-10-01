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

router.get("/loginCheck", async (req, resp) => {
  try {
    let res = await User.find();
    let response = undefined;
    res.forEach(async (e) => {
      if ((e.email === req.query.email) & (e.password === req.query.password)) {
        response = true;
      }
    });
    resp.json(response);
  } catch (err) {
    resp.json({ message: err });
  }
});

router.get("/generateId", async (req, resp) => {
  try {
    let res = await User.find();
    let response = undefined;
    let temp = "";
    res.forEach(async (e) => {
      console.log(e);
      let id = e.id.split("-")[1];
      id = parseInt(id + 1);
      if (id <= 9) {
        temp = "U-" + id;
      } else if (id <= 99) {
        temp = "U-0" + id;
      } else {
        temp = "U-00" + id;
      }
    });
    resp.json(temp);
  } catch (err) {
    resp.json({ message: err });
  }
});
module.exports = router;
