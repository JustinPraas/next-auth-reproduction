import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
        error: "/",
    },
    debug: true,
    events: {
        signIn: (message) => console.log("Sign in occurred", message),
        signOut: (message) => console.log("Sign out occurred", message),
        linkAccount: (message) => console.log("Link account occurred", message),
        session: (message) => console.log("Session occured", message),
        updateUser: (message) => console.log("updateUser occured", message),
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: { username: {}, password: {} },

            async authorize(credentials, req): Promise<User | null> {
                // User successfully authenticated
                const user: User = { name: credentials?.username, id: "1" }
                return user
            },
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.sub = account.userId
            }
            return token
        },
        async session({ session, token }) {
            return session
        }
    },
}

export default NextAuth(authOptions)