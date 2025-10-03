require('dotenv').config();
const express = require("express");
const cors = require("cors")
const rootRouter = require("./routes/index.js")
const morgan = require('morgan')

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'))

app.use("/api/v1", rootRouter);
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
