import mongoose from "mongoose";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { mongoConnect } from "./database";

export const authOptions=({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text"},
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await mongoConnect();
        const user =  await mongoose.model('users').findOne({ email: credentials.email});
        if (user && user.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/",
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token, user }) {
      console.log(session,token)
      session.user.username = token.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
