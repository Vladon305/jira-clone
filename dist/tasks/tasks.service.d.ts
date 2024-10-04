import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto, projectId: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateTaskAssign(id: number, assignUserId: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateTaskStatus(id: number, updateTaskDto: UpdateTaskStatusDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
