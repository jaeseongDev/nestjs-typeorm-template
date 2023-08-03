import { Inject, Injectable } from "@nestjs/common";
import { Board } from "./board.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BoardService {

  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>
  ) {
  }

  async findAll() {
    return this.boardRepository.find();
  }
}
