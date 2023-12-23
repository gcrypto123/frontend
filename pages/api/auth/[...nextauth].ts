import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {BE_HOST} from '../../../global-const';
export default NextAuth({
  session:{
    jwt: true
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch(`${BE_HOST}/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        console.log(user);
        if (user?.status == 200 && user) {
          return user;
        } else {
          throw new Error(user?.message);
        }
      },
      credentials: undefined
    }),
  ],
  callbacks:{
    async jwt({token, user}){
      return {...token,...user};
    },
    async session({session, token, user}){
      session.user= token;
      return session;
    } 
  },
  // pages: {
  //   signIn: "/",
  // },
});