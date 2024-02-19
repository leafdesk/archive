'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

const Top = ({
  backRoute,
  pageTitle,
}: {
  backRoute: string
  pageTitle: string
}) => {
  const router = useRouter()

  return (
    <div className="flex items-center gap-x-2 mb-5">
      {/* 이전 페이지 이동 버튼 */}
      <Button
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => router.push(backRoute)}
      >
        <span className="sr-only">Move to previous page</span>
        <ArrowLeftIcon className="h-4 w-4" />
      </Button>

      {/* 페이지 제목 */}
      <h3 className="capitalize">{pageTitle}</h3>
    </div>
  )
}

export default Top
