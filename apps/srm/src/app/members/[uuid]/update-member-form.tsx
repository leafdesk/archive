'use client'

import { getMemberByUuid, onMemberFormSubmit } from '@/app/actions/members'
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
import { Label } from '@/components/ui/label'

const UpdateMemberForm = ({ uuid }: { uuid: string }) => {
  const [member, setMember] = useState<Member>({} as Member)

  useEffect(() => {
    getMemberByUuid(uuid).then((member) => {
      setMember(() => member)
    })
  }, [])

  const handleSubmit = (formData: FormData) => {
    formData.append('uuid', uuid.toString())
    onMemberFormSubmit(formData).then((response) => {
      console.log('🚀 ~ onMemberFormSubmit ~ response:', response)
      window.location.reload()
    })
  }

  return (
    <>
      {member.uuid ? (
        <form action={handleSubmit}>
          <div className="grid gap-3 grid-cols-2">
            {/* 회원 코드 */}
            <div>
              <Label htmlFor="memberCode">회원 코드</Label>
              <Input
                name="memberCode"
                placeholder="회원 코드"
                defaultValue={member.memberCode}
              />
            </div>

            {/* 이름 */}
            <div>
              <Label htmlFor="name">이름</Label>
              <Input
                name="name"
                placeholder="이름"
                defaultValue={member.name}
              />
            </div>

            {/* 성별 */}
            <div>
              <Label htmlFor="gender">성별</Label>
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
                    <SelectItem value="남">남성</SelectItem>
                    <SelectItem value="여">여성</SelectItem>
                    <SelectItem value="-">선택하지 않음</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* 생년월일 */}
            <div>
              <Label htmlFor="birthDate">생년월일</Label>
              <Input
                name="birthDate"
                placeholder="생년월일"
                defaultValue={member.birthDate}
              />
            </div>

            {/* 전화번호 */}
            <div>
              <Label htmlFor="phoneNumber">전화번호</Label>
              <Input
                name="phoneNumber"
                placeholder="전화번호"
                defaultValue={member.phoneNumber}
              />
            </div>

            {/* 소속 */}
            <div>
              <Label htmlFor="affiliation">소속</Label>
              <Input
                name="affiliation"
                placeholder="소속"
                defaultValue={member.affiliation}
              />
            </div>

            {/* 직분 */}
            <div>
              <Label htmlFor="position">직분</Label>
              <Input
                name="position"
                placeholder="직분"
                defaultValue={member.position}
              />
            </div>

            {/* 부서 */}
            <div>
              <Label htmlFor="department">부서</Label>
              <Input
                name="department"
                placeholder="부서"
                defaultValue={member.department}
              />
            </div>

            {/* 추가 정보 */}
            <div>
              <Label htmlFor="extra">추가 정보</Label>
              <Input
                name="extra"
                placeholder="추가 정보"
                defaultValue={member.extra}
              />
            </div>
          </div>

          <div className="flex gap-x-2 justify-end mt-10">
            <Button type="submit">저장</Button>
            <DeleteDialog uuid={uuid} />
          </div>
        </form>
      ) : (
        '로딩 중...'
      )}
    </>
  )
}

export default UpdateMemberForm
