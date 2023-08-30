import { Controller, Get, Req, Param, Ip, Post, Body, Query, HttpCode, Header } from '@nestjs/common';
import { Request } from 'express';

import { CreateCatDto } from './create-cat.dot';

@Controller('cats')
export class CatController {
    // https://docs.nestjs.com/controllers#request-object
    @Get()
    findAll(@Req() request: Request, @Ip() ip?: any): string {
        // console.log(request);
        // console.log(key);
        // console.log(ip);
        return "All cats names.";
    }

    @Post()
    @HttpCode(202)
    // @Header('Cache-Control', 'none')
    create(@Body() body?: any, @Query() query?: any): string {
        // console.log(body);
        // console.log(query.a);
        return "new cat added.";
    }

    @Get('h*t')
    windCard(): string {
        return "Wild card used."
    }

    @Get(':id')
    find(@Param('id') id: any): string {
        return `Found the cat with id ${id}`;
    }

    @Post('dto-create')
    async createWithDto(@Body() createDto: CreateCatDto): Promise<string> {
        // console.log(createDto);
        return "The dto cat created";
    }
}
