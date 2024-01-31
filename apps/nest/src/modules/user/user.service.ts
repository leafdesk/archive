import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  private userStorage: Array<User> = []
  private id = 0

  create(createUserDto: CreateUserDto) {
    this.userStorage.push({
      id: ++this.id,
      ...createUserDto,
      createAt: new Date(),
      updateAt: new Date(),
    })
  }

  findAll() {
    return [...this.userStorage]
  }

  findOne(id: number) {
    const user = this.userStorage.find((user) => user.id === id)
    if (!user) {
      throw new NotFoundException()
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id)
    this.remove(id)
    this.userStorage.push({ ...user, ...updateUserDto, updateAt: new Date() })
  }

  remove(id: number) {
    this.findOne(id)
    this.userStorage = this.userStorage.filter((user) => user.id !== id)
  }
}
