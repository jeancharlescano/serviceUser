import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    mail: String;

    @Column()
    token: String;
}