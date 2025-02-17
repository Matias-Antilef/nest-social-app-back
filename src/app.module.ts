import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule, PostModule, UserModule],
  controllers: [AppController, AuthController, UserController, PostController],
  providers: [AppService],
})
export class AppModule {}
