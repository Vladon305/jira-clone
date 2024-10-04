import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto, projectId: number) {
    return this.prisma.task.create({
      data: {
        ...createTaskDto,
        project: {
          connect: {
            id: projectId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: {
        name: updateTaskDto.name,
        description: updateTaskDto.description,
        assignedTo: {
          connect: {
            id: updateTaskDto.assignedToId,
          },
        },
        project: {
          connect: {
            id: updateTaskDto.projectId,
          },
        },
        status: updateTaskDto.status,
      },
    });
  }

  updateTaskAssign(id: number, assignUserId: number) {
    return this.prisma.task.update({
      where: { id },
      data: {
        assignedTo: {
          connect: {
            id: assignUserId,
          },
        },
      },
    });
  }

  updateTaskStatus(id: number, updateTaskDto: UpdateTaskStatusDto) {
    return this.prisma.task.update({
      where: { id },
      data: { status: updateTaskDto.status },
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
