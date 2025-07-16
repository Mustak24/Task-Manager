const express = require('express');
const authRouter = require('./routes/auth-route');
const connectToDb = require('./middlewares/conntect-to-db');
const cors = require('cors')

const app = express();
app.use(cors({
    origin: '*'
}))

app.use(express.json());
app.use(express.urlencoded());

app.use(connectToDb);

app.use('/api/auth', authRouter)


app.listen(3000, () => {
    console.log('server is runing on http://localhost:3000')
})