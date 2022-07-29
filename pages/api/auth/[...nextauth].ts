import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',

      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },

      authorize: (credentials) => {
        const { email, password }: any = credentials

        if (
          email === process.env.AWESOME_EMAIL &&
          password === process.env.AWESOME_PASSWORD
        ) {
          return {
            id: 1,
            email
          }
        }

        return null
      }
    })
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token.id = user.id

      return token
    },
    session: ({ session, token }) => {
      if (token) session.id = token.id

      return session
    }
  }
})
