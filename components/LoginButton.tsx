import { useSession, signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  const { data: session } = useSession()

  if (session?.user) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
        <span style={{ marginLeft: '2rem' }}>
          Signed in as {session.user?.email}
        </span>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
      <span style={{ marginLeft: '2rem' }}>Not signed in</span>
    </>
  )
}
