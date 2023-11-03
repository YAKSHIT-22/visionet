import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
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

    })
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
};