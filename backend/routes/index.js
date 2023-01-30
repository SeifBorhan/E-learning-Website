const express = require("express");
const router = express.Router();
const cc = require("../models/cc");
// const { useCookies } = require("react-cookie");
// const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
const jwt= require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60;
const createToken = (value) => {
    return jwt.sign({ value }, 'supersecret', {
        expiresIn: maxAge
    });
};

router.post("/", async (req, res) => {
//  res.cookie('countryCode', token, { httpOnly: true, maxAge: maxAge * 1000 });
  // setCookie("COCIO", req.body.value, { path: "/" });
  const code = await cc.findOne({ country: req.body.country });
  const token = createToken(code.currencyCode);
  var decoded = jwt.verify(token, 'supersecret');
 res.cookie('countryCode', token, { httpOnly: true, maxAge: maxAge * 1000 });
 console.log(decoded.value)
  // req.session.code = code.currencyCode;
  // res.render("home", { country: req.session.country, code: req.session.code });
});
module.exports = router;
