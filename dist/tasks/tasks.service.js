"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let TasksService = class TasksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createTaskDto, projectId) {
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
    findOne(id) {
        return this.prisma.task.findUnique({
            where: { id },
        });
    }
    update(id, updateTaskDto) {
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
    updateTaskAssign(id, assignUserId) {
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
    updateTaskStatus(id, updateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data: { status: updateTaskDto.status },
        });
    }
    remove(id) {
        return this.prisma.task.delete({
            where: { id },
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map