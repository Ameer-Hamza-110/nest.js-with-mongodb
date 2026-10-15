import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service.js';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Post('seed')
    createSeed(){
        return this.projectService.seed();
    }
    
    @Get('developers')
    getDevelopers(){
        return this.projectService.getAllDevelopers();
    }

    @Get()
    getProjects(){
        return this.projectService.getAllProjects();
    }
}
