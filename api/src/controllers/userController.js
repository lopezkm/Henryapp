const bcrypt = require('bcrypt');
const { User } = require('../models');

// Metodos del usuario
const createUser = (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10) //Encriptar password
  });

  user.save()
    .then(response => {
      return res.json({
        ok: true,
        response
      });
    })
    .catch(error => res.status(400).json({
      ok: false,
      message: error.message
    }))
};

const getUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      return res.json({
        ok: true,
        user
      });
    })
    .catch(error => res.status(400).json({
      ok: false,
      message: error.message
    }))
};


module.exports = {
  createUser,
  getUser
}