import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, projectId: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateTaskDto: UpdateTaskDto): string;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
