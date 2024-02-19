'use client'

import { getMemberById, onMemberFormSubmit } from '@/app/actions/members'
import { Input } from '@/components/ui/input'
import { Member } from '@/types/member'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import DeleteDialog from '@/components/common/delete-dialog'

const UpdateMemberForm = ({ memberId }: { memberId: number }) => {
  const [member, setMember] = useState<Member>({} as Member)

  useEffect(() => {
    getMemberById(Number(memberId)).then((member) => {
      setMember(() => member)
    })
  }, [])

  const handleSubmit = (formData: FormData) => {
    formData.append('id', memberId.toString())
    onMemberFormSubmit(formData).then((response) => {
      console.log('🚀 ~ onMemberFormSubmit ~ response:', response)
      window.location.reload()
    })
  }

  return (
    <>
      {member.id ? (
        <form action={handleSubmit}>
          <div className="grid gap-3 grid-cols-2">
            {/* 이름 */}
            <Input name="name" placeholder="name" defaultValue={member.name} />

            {/* 성별 */}
            <Select
              name="gender"
              value={member.gender}
              onValueChange={(value: string) => {
                const editedMember = { ...member, gender: value }
                console.log(
                  '🚀 ~ UpdateMemberForm ~ editedMember:',
                  editedMember,
                )
                setMember(editedMember)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Gender</SelectLabel> */}
                  <SelectItem value="M">Male</SelectItem>
                  <SelectItem value="F">Female</SelectItem>
                  <SelectItem value="O">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* 생년월일 */}
            <Input
              name="birthDate"
              placeholder="Birth date"
              defaultValue={
                member.birthDate
                  ? dayjs(member.birthDate).format('YYYY-MM-DD')
                  : ''
              }
            />

            {/* 국가 */}
            <Input
              name="nation"
              placeholder="nation"
              defaultValue={member.nation}
            />

            {/* 업데이트 일자 */}
            <Input
              name="updatedAt"
              placeholder="updatedAt"
              defaultValue={
                member.updatedAt
                  ? dayjs(member.updatedAt).format('YYYY-MM-DD HH:mm:ss')
                  : ''
              }
              disabled
            />
          </div>

          <div className="flex gap-x-2 justify-end mt-10">
            <Button type="submit">Save</Button>
            <DeleteDialog memberId={memberId} />
          </div>
        </form>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default UpdateMemberForm
