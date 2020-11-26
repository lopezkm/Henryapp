const express = require("express");
const sharp = require("sharp");
const { dir } = require("./dirMiddleware");
const router = express();

router.get("/:size/:name/", (req, res) => {
  let { name, size } = req.params;
  size = parseInt(size);

  sharp(`${dir}src/uploads/${name}`)
    .resize(size)
    .toBuffer()
    .then((data) => {
      res.type("png").send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
