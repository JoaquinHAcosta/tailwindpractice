import bcrypt from 'bcrypt'
import * as mongoose from 'mongoose'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/models/User'
// import { MongoDBAdapter } from '@auth/mongodb-adapter'

export const authOptions = {
  // secret: process.env.SECRET,
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email
        const password = credentials?.password

        mongoose.connect(process.env.MONGO_URL as string)
        const user = await User.findOne({ email })
        const passwordOk =
          user && bcrypt.compareSync(password as string, user.password)

        if (passwordOk) {
          return user
        }

        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}
