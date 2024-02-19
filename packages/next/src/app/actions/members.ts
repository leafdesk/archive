'use server'

import prisma from '@lab/sdk/utils/prisma'
import dayjs from 'dayjs'

/**
 * 전체 회원 조회.
 */
export const getMembers = async () => {
  const members = await prisma.member.findMany()
  return members
}

/**
 * ID로 회원 조회.
 */
export const getMemberById = async (id: number) => {
  const member = await prisma.member.findUnique({ where: { id: id } })
  return member
}

/**
 * 신규 회원 추가.
 */
export const postMember = async (formData: FormData) => {
  const birthDateStr = String(formData.get('birthDate'))
  const createMemberDto = {
    name: formData.get('name'),
    gender: formData.get('gender'),
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
 * 회원 정보 업데이트.
 */
export const updateMember = async (formData: FormData) => {
  const birthDateStr = String(formData.get('birthDate'))
  const updateMemberDto = {
    name: formData.get('name'),
    gender: formData.get('gender'),
    birthDate: dayjs(birthDateStr),
    nation: formData.get('nation'),
    updatedAt: new Date(),
  }
  return await prisma.member.update({
    where: { id: Number(formData.get('id')) },
    data: { ...updateMemberDto },
  })
}

/**
 * ID로 회원 정보 삭제.
 */
export const deleteMember = async (id: number) => {
  return await prisma.member.delete({
    where: { id: id },
  })
}

/**
 * 회원 양식 제출 시.
 */
export const onMemberFormSubmit = async (formData: FormData) => {
  const id = formData.get('id')
  const member = await getMemberById(Number(id))

  if (member) {
    return await updateMember(formData)
  } else {
    return await postMember(formData)
  }
}
