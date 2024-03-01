const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authrouter = require('./routers/authRoutes');
const NewprojectsRouter = require("./routers/NewProjectRouter")
const blockRouter = require("./routers/BlocksRouter")

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


const DBconnections = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log("Error connecting to MongoDB", error);
    }
  };



app.use('/api',authrouter)
app.use('/api',NewprojectsRouter)
app.use('/api',blockRouter)

app.listen(8000, () => {
    DBconnections()
    console.log('Server is running on port 8000');
});
