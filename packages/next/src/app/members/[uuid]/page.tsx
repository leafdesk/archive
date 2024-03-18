'use client'

import { ROUTE_MEMBER } from '@/constants/routes'
import UpdateMemberForm from './update-member-form'
import Top from '@/components/common/top'

const MemberDetailPage = ({ params }: { params: { uuid: string } }) => {
  return (
    <main className="">
      <div className="p-5">
        <Top backRoute={ROUTE_MEMBER} pageTitle="회원 상세" />
        <UpdateMemberForm uuid={params.uuid} />
      </div>
    </main>
  )
}

export default MemberDetailPage
