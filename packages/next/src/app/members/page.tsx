'use client'

import MemberDataTable from '@/app/members/data-table'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ROUTE_MEMBER_REGISTRATION } from '@/constants/routes'
import { useRouter } from 'next/navigation'

const MemberPage = () => {
  const router = useRouter()

  return (
    <main className="bg-[#fafafa]">
      <div className="p-5">
        {/* 신규 회원 등록 */}
        <Button
          className="capitalize mb-4"
          onClick={() => router.push(ROUTE_MEMBER_REGISTRATION)}
        >
          Register new member
        </Button>

        {/* 회원 리스트 */}
        <Card className="p-5">
          <MemberDataTable />
        </Card>
      </div>
    </main>
  )
}

export default MemberPage
