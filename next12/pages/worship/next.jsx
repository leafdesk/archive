import Page from '@/components/Page'
import { useRouter } from 'next/router'

const NextPage = () => {
  const router = useRouter()

  return (
    <Page>
      <span>This is next page.</span>
      <br />

      <button onClick={() => router.back()}>&lt; prev page</button>
    </Page>
  )
}

export default NextPage
