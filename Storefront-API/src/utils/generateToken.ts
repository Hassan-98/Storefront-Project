import jwt from 'jsonwebtoken';
import config from '../configs/vars.config';

const { jwt_secret: JWT_SECRET } = config;

const generateToken = (id: number): string => {
  return jwt.sign(id.toString(), JWT_SECRET as string);
};

export default generateToken;
