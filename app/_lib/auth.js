import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import mongoose from 'mongoose';
export const authOptions = {
  pages: {
    signIn: "/",
  },

  session: {
    strategy: "jwt", 
  },

  secret: process.env.NEXTAUTH_SECRET,
  

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = await mongoose.model('User').findOne({ email: credentials.email });

        if (user && user.password === credentials.password) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
  database: process.env.DATABASE_URL,
};