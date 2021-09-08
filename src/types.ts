import { Request, Response } from "express";
import { Redis } from "ioredis";

declare module "express-session" {
  interface SessionData {
    views: number;
    userId: number;
  }
}

export type MyContext = {
  req: Request;
  redis: Redis;
  res: Response;
};
