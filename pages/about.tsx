import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    }
  })

  if (status === 'loading') {
    return 'Loading or not authenticated...'
  }

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  )
}
