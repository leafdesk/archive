'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const ResponseDialog = () => {
  const router = useRouter()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          저장
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>정보 업데이트</DialogTitle>
          <DialogDescription>
            유저 정보가 성공적으로 업데이트 되었습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ResponseDialog
