import { Module } from "@nestjs/common";
import { BoardModule } from "./board/board.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    BoardModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
