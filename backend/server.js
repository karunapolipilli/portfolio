require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/contactRouters.js");
const Contact=require('./models/contactModel.js');
const app = express();
app.use(cors())
const PORT = 5000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const db = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use("/user",userRoutes)



app.get("/contactinfo", async (req, res) => {
  const userPassword = req.query.password; // Access password from query parameter

  if (!userPassword || userPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized: Invalid password" });
  }

  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact info", error });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
