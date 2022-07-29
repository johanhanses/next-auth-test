import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return <div>{session ? <p>Startsidan</p> : <p>Sign in!!</p>}</div>
}
