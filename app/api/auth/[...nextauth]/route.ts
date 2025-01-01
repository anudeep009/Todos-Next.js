import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import User from "../../../../models/user.model";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and Password are required.");
        }

        try {
          const user = await User.findOne({ email: credentials.email }).exec();
          if (!user) {
            throw new Error("User not found.");
          }

          const passwordCorrect = await compare(credentials.password, user.password);
          if (!passwordCorrect) {
            throw new Error("Invalid credentials.");
          }

          return {
            id: user._id.toString(),
            email: user.email,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authentication failed. Please try again.");
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
