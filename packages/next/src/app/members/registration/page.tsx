'use client'

import { Card } from '@/components/ui/card'
import CreateMemberForm from './create-member-form'
import Top from '@/components/common/top'
import { ROUTE_MEMBER } from '@/constants/routes'
import MemberForm from '@/app/members/member-form'
import { onMemberFormSubmit, postMember } from '@/app/actions/members'
import { useRouter } from 'next/navigation'

const MemberRegistrationPage = () => {
  const router = useRouter()

  const handleSubmit = (formData: FormData) => {
    postMember(formData).then((response) => {
      console.log(response)
    })

    // onMemberFormSubmit(formData).then((response) => {
    //   console.log('🚀 ~ onMemberFormSubmit ~ response:', response)
    //   // window.location.reload()
    //   router.push(ROUTE_MEMBER)
    // })
  }

  return (
    <main className="">
      <div className="p-5">
        <Top backRoute={ROUTE_MEMBER} pageTitle="신규 회원 등록" />
        {/*<Card className="w-[360px] p-5 mb-4">*/}
        {/*  <CreateMemberForm />*/}
        {/*</Card>*/}

        <MemberForm onSubmit={handleSubmit} />
      </div>
    </main>
  )
}

export default MemberRegistrationPage
