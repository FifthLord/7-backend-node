import express from "express";
import mongoose from "mongoose";

const PORT = 5005;
const DB_URL = 'mongodb+srv://user:user@cluster0.mpcfser.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
   console.log(req.body);
   res.status(200).json('Server working')
})

async function startApp() {
   try {
      await mongoose.connect(DB_URL, { useNewUrlParser: true })
      app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
   } catch (e) {
      console.log(e);
   }
}

startApp()
