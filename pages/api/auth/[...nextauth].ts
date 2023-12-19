import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  session:{
    jwt: true
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const res = await fetch("http://localhost:1000/user/login", {
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
        if ( user?.status == 200 && user) {
          return Promise.resolve({email: user?.data?.email, role: user?.data?.role, token : user?.data?.token });  
        } else {
          throw new Error(user?.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
});