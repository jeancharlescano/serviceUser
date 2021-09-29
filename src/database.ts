import { ConnectionOptions } from "typeorm";
import { User } from "./entities/User";

export const CONNECTION_OPTIONS: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "password",
    database: "user_service",
    dropSchema: false,
    synchronize: true,
    logging: false,
    entities: [User],
};

