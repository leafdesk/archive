'use client'

import { Button } from '@/components/ui/button'
import { batchInsertMembers } from '../actions/batch'
import { getMembers } from '../actions/members'
import { togglePartialTextVisibility } from '@lab/utils/security'

const TestPage = () => {
  const handleClick = async () => {
    const data = await getMembers()
    console.log(data)
  }

  return (
    <main className="">
      <div className="p-5">
        <Button onClick={() => batchInsertMembers()}>
          Batch insert members
        </Button>{' '}
        <Button variant="ghost" onClick={() => handleClick()}>
          Get members from banseok
        </Button>{' '}
        <Button onClick={() => togglePartialTextVisibility()}>
          Hide text w/ asterisks
        </Button>
      </div>
    </main>
  )
}

export default TestPage
