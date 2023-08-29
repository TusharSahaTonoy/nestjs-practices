import { Controller, Get, Req, Param, Ip, Post, Body, Query, HttpCode } from '@nestjs/common';
import { Request } from 'express';

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
    create(@Body() body?: any, @Query() query?: any): string {
        // console.log(body);
        // console.log(query.a);
        return "new cat added.";
    }

    @Get('h*t')
    windCard(): string {
        return "Wild card used."
    }
}
