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

const DeleteDialog = ({ memberId }: { memberId: number }) => {
  const router = useRouter()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="destructive">
          Delete member
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the member data? This action cannot
            be undone.
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
              deleteMember(Number(memberId)).then((response) => {
                console.log('🚀 ~ deleteMember ~ response:', response)
                router.push(ROUTE_MEMBER)
              })
            }}
          >
            Delete member
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteDialog
