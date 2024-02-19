import { Card } from '@/components/ui/card'
import CreateMemberForm from './create-member-form'
import Top from '@/components/common/top'
import { ROUTE_MEMBER } from '@/constants/routes'

const MemberRegistrationPage = () => {
  return (
    <main className="bg-[#fafafa]">
      <div className="p-5">
        <Top backRoute={ROUTE_MEMBER} pageTitle="Member registration" />
        <Card className="w-[360px] p-5 mb-4">
          <CreateMemberForm />
        </Card>
      </div>
    </main>
  )
}

export default MemberRegistrationPage
