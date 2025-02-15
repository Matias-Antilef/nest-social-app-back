import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { CommentController } from './comment/comment.controller';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [CommentModule, AuthModule, PostModule, UserModule],
  controllers: [AppController, AuthController, UserController, PostController, CommentController],
  providers: [AppService],
})
export class AppModule {}
