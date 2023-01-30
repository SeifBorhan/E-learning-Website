const creditCard = require("../models/creditCard");

exports.insertCc = async (req, res) => {
  const owner = req.query.id;
  const { number, ccv, exp } = req.body;

  const cc = await creditCard.create({ number, ccv, exp, owner });
  res.send(cc);
};
