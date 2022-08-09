import GithubProvider from "next-auth/providers/github";

export const NextAuthConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
    // ...add more providers here
  ]
};
