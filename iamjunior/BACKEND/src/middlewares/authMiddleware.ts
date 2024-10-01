import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export type UserPayload = {
  id: string;
  issuedAt: number;
  expires: number;
};

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ error: "Not authenticated" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    req.currentUser = payload;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authenticated" });
  }
}
