import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export class UpdateTaskStatusDto extends PartialType(CreateTaskDto) {
  status: TaskStatus;
}
