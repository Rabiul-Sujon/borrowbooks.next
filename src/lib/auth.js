// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { MongoClient } from "mongodb";

// // ✅ Cache the client promise to prevent multiple connections
// const globalWithMongo = global;

// if (!globalWithMongo._mongoClient) {
//   globalWithMongo._mongoClient = new MongoClient(process.env.MONGODB_URI, {
//     family: 4,
//     serverSelectionTimeoutMS: 10000,
//   }).connect();
// }

// const client = await globalWithMongo._mongoClient;

// export const auth = betterAuth({
//   database: mongodbAdapter(client.db("borrowbooks")),
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//   },
// });

// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import clientPromise from "./mongodb";

// const client = await clientPromise;

// export const auth = betterAuth({
//   database: mongodbAdapter(client.db("borrowbooks")),
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//   },
// });

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(await clientPromise.then(c => c.db("borrowbooks"))),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});