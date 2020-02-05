const { Router } = require("express");
const router = Router();
const Caesar = require("caesar-salad").Caesar;

router.post("/encode", (req, res) => {
  console.log(req.body);
  const { encode, secret } = req.body;
  const decode = Caesar.Cipher(secret).crypt(encode);
  res.status(200).json({ decode });
});

router.post("/decode", (req, res) => {
  const { decode, secret } = req.body;
  const encode = Caesar.Decipher(secret).crypt(decode);
  res.status(200).json({ encode });
});

module.exports = router;
