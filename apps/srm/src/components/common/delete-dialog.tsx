'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { deleteMember } from '@/app/actions/members'
import { useRouter } from 'next/navigation'
import { ROUTE_MEMBER } from '@/constants/routes'

const DeleteDialog = ({ uuid }: { uuid: string }) => {
  const router = useRouter()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="destructive">
          삭제
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>회원 정보 삭제</DialogTitle>
          <DialogDescription>
            회원 데이터를 삭제할까요? 이 동작은 되돌릴 수 없어요.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <DialogFooter>
          <Button
            type="submit"
            variant="destructive"
            onClick={() => {
              deleteMember(Number(uuid)).then((response) => {
                console.log('🚀 ~ deleteMember ~ response:', response)
                router.push(ROUTE_MEMBER)
              })
            }}
          >
            회원 정보를 완전히 삭제할게요.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteDialog
