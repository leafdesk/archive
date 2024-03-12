'use client'

import { Button } from '@/components/ui/button'
import { batchInsertMembers } from '../actions/batch'

const TestPage = () => {
  return (
    <main className="bg-[#fafafa]">
      <div className="p-5">
        <Button onClick={() => batchInsertMembers()}>
          Batch insert members
        </Button>
      </div>
    </main>
  )
}
export default TestPage
