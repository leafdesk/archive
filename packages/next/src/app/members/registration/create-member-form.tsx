'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Gender, MemberFormId } from '@/constants/enums/form'
import { onMemberFormSubmit } from '@/app/actions/members'
import { useRouter } from 'next/navigation'
import { ROUTE_MEMBER } from '@/constants/routes'

const CreateMemberForm = () => {
  const router = useRouter()

  const handleSubmit = (formData: FormData) => {
    onMemberFormSubmit(formData).then((response) => {
      console.log('🚀 ~ onMemberFormSubmit ~ response:', response)
      // window.location.reload()
      router.push(ROUTE_MEMBER)
    })
  }

  return (
    <form action={handleSubmit} className="grid gap-y-3">
      {/* 이름 */}
      <Input type="text" name="name" placeholder="Name" />

      {/* 성별 */}
      <RadioGroup className="flex" name="gender" defaultValue={Gender.OTHER}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Gender.MALE} id={MemberFormId.GENDER_MALE} />
          <Label htmlFor={MemberFormId.GENDER_MALE}>Male</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={Gender.FEMALE}
            id={MemberFormId.GENDER_FEMALE}
          />
          <Label htmlFor={MemberFormId.GENDER_FEMALE}>Female</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Gender.OTHER} id={MemberFormId.GENDER_OTHER} />
          <Label htmlFor={MemberFormId.GENDER_OTHER}>Other</Label>
        </div>
      </RadioGroup>

      {/* 생년월일 */}
      <Input type="text" name="birthDate" placeholder="Birth date" />

      {/* 국가 */}
      <Input type="text" name="nation" placeholder="Nation" />

      {/* 제출 */}
      <Button type="submit" className="mt-2">
        Submit
      </Button>
    </form>
  )
}

export default CreateMemberForm
