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

// -----------------------------------------------------


import dns from "node:dns/promises";
import { MongoClient } from "mongodb";

// ✅ Force IPv4 DNS resolution — fixes querySrv ECONNREFUSED
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri = process.env.MONGODB_URI;

const options = {
  family: 4,
  serverSelectionTimeoutMS: 10000,
};

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}

export default clientPromise;