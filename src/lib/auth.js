import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import clientPromise from './mongodb'

// Connect to mongoDB
const client = await clientPromise;
const db = client.db();

// Configure betterAuth with mongoDB & social providers
export const auth = betterAuth({
  database: mongodbAdapter(db),
//email and password authentication
  emailAndPassword: {
    enabled: true,
  },
  //Google 0auth
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});