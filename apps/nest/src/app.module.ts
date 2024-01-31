import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { MemberModule } from './modules/member/member.module'

@Module({
  imports: [UserModule, MemberModule],
})
export class AppModule {}
