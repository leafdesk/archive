'use client'

import { ROUTE_MEMBER } from '@/constants/routes'
import UpdateMemberForm from './update-member-form'
import Top from '@/components/common/top'

const MemberDetailPage = ({ params }: { params: { id: number } }) => {
  return (
    <main className="bg-[#fafafa]">
      <div className="p-5">
        <Top backRoute={ROUTE_MEMBER} pageTitle="Member Details" />
        <UpdateMemberForm memberId={params.id} />
      </div>
    </main>
  )
}

export default MemberDetailPage
