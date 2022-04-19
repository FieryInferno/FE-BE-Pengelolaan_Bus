const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const corsOptions = {origin: 'http://localhost:3001'};
const bcrypt = require('bcryptjs');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./app/models');
const User = db.user;

const initialUser = () => {
  User.create({
    username: 'admin',
    password: bcrypt.hashSync('admin', 8),
    name: 'admin',
  });
};

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and resync DB');
  initialUser();
});

app.get('/', (req, res) => {
  return res.json({message: 'pengelolaan bus'});
});

require('./app/routes/auth.routes')(app);

app.listen(5000, () => console.log('Server is running on port 5000'));
