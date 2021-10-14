const Express = require('express');
const routes = require('./routes');
const app = Express();
const cors = require('cors');
require('./database/index')

app.use(cors());
app.use(Express.json());
app.use(routes);
app.listen(3333);