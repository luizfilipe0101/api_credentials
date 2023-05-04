const app = require('./app');
require('dotenv').config();

const PORT = process.env.SERVER_PORT;

app.listen(PORT,()=>{console.log('API running on port 8083 ...')});