import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { ObjetiveModule } from './objetive/objetive.module';

@Module({
  imports: [UserModule, WorkspaceModule, ObjetiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
