'use server'

import prisma from '@lab/sdk/utils/prisma'
import dayjs from 'dayjs'

/**
 * 멤버 전체 조회.
 */
export const getMembers = async () => {
  const members = await prisma.member.findMany()
  return members
}

/**
 * 멤버 추가.
 */
export const postMember = async (formData: FormData) => {
  const birthDateStr = String(formData.get('birthDate'))
  const createMemberDto = {
    name: formData.get('name'),
    gender: Number(formData.get('gender')),
    birthDate: dayjs(birthDateStr),
    nation: formData.get('nation'),
    updatedAt: new Date(),
  }
  return await prisma.member.create({
    data: {
      ...createMemberDto,
    },
  })
}

/**
 * 회원 양식 제출 시.
 */
export const onMemberFormSubmit = async (formData: FormData) => {
  return await postMember(formData)
}
