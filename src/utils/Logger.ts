import { Logger } from "tslog";

const log: Logger = new Logger({ name: "dev-reference-backend" });

export const logger = (level, message) => log[level](message);
