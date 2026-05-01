// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// let client;
// let clientPromise

// //Checking MONGODB uri
// if (!uri) {
//   throw new Error('MONGODB_URI missing from .env')
// }

// //Reuse the existing connection to avoid many connection
// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri);
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise;
// } 
// //Create a new connection
// else {
//   client = new MongoClient(uri)
//   clientPromise = client.connect();
// }

// export default clientPromise;