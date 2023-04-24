import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { ObjetiveModule } from './objetive/objetive.module';
import { InvitationModule } from './invitation/invitation.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [UserModule, WorkspaceModule, CategoryModule, TransactionModule,  InvitationModule, ObjetiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
