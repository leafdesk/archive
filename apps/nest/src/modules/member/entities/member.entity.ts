import Gender from '@/enums/gender'

export class Member {
  name: string
  gender: Gender
  birthDate?: Date
  nation?: string
  createdAt: Date
  updatedAt: Date
}
