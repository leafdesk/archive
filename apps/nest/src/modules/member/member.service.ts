import { Injectable } from '@nestjs/common'
import { CreateMemberDto } from './dto/create-member.dto'
import { UpdateMemberDto } from './dto/update-member.dto'
import prisma from '@/utils/prisma'

@Injectable()
export class MemberService {
  async create(createMemberDto: CreateMemberDto) {
    await prisma.member.create({
      data: {
        ...createMemberDto,
      },
    })
    return `create ${createMemberDto.name}`
  }

  findAll() {
    const members = prisma.member.findMany()
    return members
  }

  findOne(id: number) {
    return `This action returns a #${id} member`
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`
  }

  remove(id: number) {
    return `This action removes a #${id} member`
  }
}
