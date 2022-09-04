import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) throw new Error(`Invalid authorization`);

    const token = authorization.split(' ')[1];

    const userId = jwt.verify(token, JWT_SECRET as string);

    req.user_id = +userId;

    next();
  } catch (err) {
    res
      .status(401)
      .json({ err: 'Operation not allowed, authorization failed' });
  }
};
