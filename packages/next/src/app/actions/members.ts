'use server'

import prisma from '@lab/sdk/utils/prisma'
import dayjs from 'dayjs'
import axios from 'axios'

const BANSEOK_URL = 'http://localhost:8080'

/**
 * 전체 회원 조회.
 */
export const getMembers = async () => {
  const response = await axios.get(`${BANSEOK_URL}/members`)
  return response.data
}

/**
 * UUID 로 회원 조회.
 */
export const getMemberByUuid = async (uuid: string) => {
  const response = await axios.get(`${BANSEOK_URL}/members/${uuid}`)
  return response.data
}

/**
 * 신규 회원 추가.
 */
export const postMember = async (formData: FormData) => {
  const json = JSON.stringify(Object.fromEntries(formData.entries()))

  const response = await axios.post(`${BANSEOK_URL}/members`, json, {
    headers: { 'Content-Type': 'application/json' },
  })
  return `postMember. status: (${response.status})${response.statusText}`
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
  const uuid = formData.get('uuid')
  const member = await getMemberByUuid(uuid)

  if (member) {
    return await updateMember(formData)
  } else {
    return await postMember(formData)
  }
}
