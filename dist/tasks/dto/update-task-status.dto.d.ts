import { CreateTaskDto } from './create-task.dto';
declare enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}
declare const UpdateTaskStatusDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTaskDto>>;
export declare class UpdateTaskStatusDto extends UpdateTaskStatusDto_base {
    status: TaskStatus;
}
export {};
