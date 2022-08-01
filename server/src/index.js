require('./db/mongoose');
const express = require('express');
const cors = require('cors');
const {ErrorHandler} = require('./middleware/errorHandle');

const userRouter = require('./routers/userRouter');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(ErrorHandler);

app.listen(port, ()=>{ console.log('Server is on on Port:',port); });