import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto, userId: number) {
    return this.prisma.project.create({
      data: {
        ...createProjectDto,
        createdBy: {
          connect: { id: userId },
        },
      },
    });
  }

  findAll(userId: number) {
    return this.prisma.project.findMany({
      where: { createdById: userId },
      include: { tasks: true, createdBy: true },
    });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id },
      include: { tasks: true, createdBy: true },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: number) {
    await this.prisma.task.deleteMany({
      where: { projectId: id },
    });
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
