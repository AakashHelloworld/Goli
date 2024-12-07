import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../config.env' });

export const signToken = (id: string) => {
    const secret = process.env.JSON__SECRET;
    const expiresIn = process.env.JSON__EXPIRE;

    // Ensure that the secret and expiresIn are defined
    if (!secret || !expiresIn) {
        throw new Error('Missing JWT_SECRET or JWT_EXPIRE in environment variables');
    }

    return jwt.sign({ id }, secret, { expiresIn });
};
