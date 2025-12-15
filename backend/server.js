const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const Census = require("./models/Census");

app.get("/api/census", async (req, res) => {
  const records = await Census.find().select(
    "year censusTaker numPeople state city"
  );
  res.json(records);
});

app.post("/api/census", async (req, res) => {
  const record = new Census(req.body);
  await record.save();
  res.json(record);
});

app.put("/api/census/:id", async (req, res) => {
  const updated = await Census.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete("/api/census/:id", async (req, res) => {
  await Census.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

