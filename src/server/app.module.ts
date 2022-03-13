import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { NODE_ENV } from 'src/shared/constants/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  /* should pass a NEXT.js server instance
        as the argument to `forRootAsync` */
  // dev: process.env.NODE_ENV !== 'production',
  // dir: resolve(__dirname, '../../ui'),
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
      viewsDir: null,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
