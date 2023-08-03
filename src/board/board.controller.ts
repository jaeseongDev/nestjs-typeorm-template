import { Controller, Get } from "@nestjs/common";
import { BoardService } from "./board.service";

@Controller('posts')
export class BoardController {

  constructor(
    private readonly boardService: BoardService
  ) {
  }

  @Get()
  findAll() {
    return this.boardService.findAll();
  }
}

