import MemberForm from '@/components/member-form'
import MemberDataTable from '@/app/member/data-table'
import { Card } from '@/components/ui/card'

const MemberPage = () => {
  return (
    <main className="bg-[#fafafa]">
      <div className="p-5">
        <Card className="w-[360px] p-5 mb-4">
          <MemberForm />
        </Card>
        <Card className="p-5">
          <MemberDataTable />
        </Card>
      </div>
    </main>
  )
}

export default MemberPage
