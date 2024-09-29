import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  providers: [PrismaService],
  imports: [UsersModule, ProjectsModule, TasksModule],
})
export class AppModule {}
