import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // চাইলে এখানে session কাস্টমাইজ করতে পারো
      return session;
    },
    async signIn({ profile }) {
      // চাইলে এখানে signIn লজিক লিখতে পারো
      return true;
    },
  },
};
