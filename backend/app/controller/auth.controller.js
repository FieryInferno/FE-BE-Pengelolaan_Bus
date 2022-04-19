const db = require('../models');
const User = db.user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

exports.login = (req, res) => {
  const {username, password} = req.body;

  User.findOne({where: {username: username}})
      .then((user) => {
        const {id, password: passwordUser, username: usernameUser, name} = user;
        if (!user) {
          return res.status(404).send({message: 'User not found'});
        }

        if (!bcrypt.compareSync(password, passwordUser)) {
          return res.status(401).send({
            accessToken: null,
            message: 'Invalid password',
          });
        }

        const token = jwt.sign({id: id}, config.secret, {expiresIn: 86400});

        return res.status(200).send({
          username: usernameUser,
          name: name,
          accessToken: token,
        });
      })
      .catch((err) => {
        return res.status(500).send({message: err.message});
      });
};
