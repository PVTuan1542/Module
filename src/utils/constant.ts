import * as dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET

export const JWT_EXPIRATION = process.env.JWT_EXPIRATION