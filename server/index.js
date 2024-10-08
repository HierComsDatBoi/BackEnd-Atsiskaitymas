import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const corsConfig = { origin: `http://localhost:${process.env.FRONT_PORT}` };

// Environment variables from .env file
const SERVER_PORT = process.env.SERVER_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;
const DATABASE = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.CLUSTER_ID}.mongodb.net/`;

// Server configuration
app.use(express.json());
app.use(cors(corsConfig));

app.listen(SERVER_PORT, () => console.log(`Server running on: http://localhost:${SERVER_PORT}`));

// Route: Get all books
app.get('/books', async (req, res) => {
  
  const filter = {};
  const sort = {
    rating: 1,
    publishDate: 1,
    pages: 1,
  };
  const limit = 10;
  const skip = 0;

  let client;
  try {
    client = await MongoClient.connect(DATABASE);
    const data = await client.db(DB_NAME).collection(DB_COLLECTION).find(filter).sort(sort).limit(limit).toArray();
    res.send(data);

  } catch (error) {
    res.status(500).send({ message: 'Error fetching data', error });

  } finally {
    if (client) {
      client.close();
    }
  }
});
