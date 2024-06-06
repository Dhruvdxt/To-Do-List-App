const app = require('./app');
const db = require('./Config/MongoDB');
const user_model = require('./Models/User');
const port = 4000;

app.listen(port, '0.0.0.0', () => console.log(`Server is Listening on Port http://localhost:${port}`));