import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])

// Fix DNS resolution for MongoDB connection in Bangladesh
dns.setDefaultResultOrder('ipv4first')

import { betterAuth } from 'better-auth'
import { MongoClient } from 'mongodb'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('MONGODB_URI Not Found')
}

const client = new MongoClient(uri)
const db = client.db('borrowbooks')

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    disableTransactions: true,
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
})