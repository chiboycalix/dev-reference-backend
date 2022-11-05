
import bcrypt from 'bcrypt';

/**
 *
 * @description This function hashes passwords to be stored in the database
 * @param {string} password
 */
export const hashPassword = async (password: string) => bcrypt.hash(password, 10);