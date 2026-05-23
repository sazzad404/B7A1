import { pool } from "../../DB";
import type { User } from "./user.interface";
import bcrypt from "bcrypt";



const getAllUserFromDB = async () => {
  const result = await pool.query(`
            SELECT id, name, email, role, created_at FROM users
            `);


  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
            SELECT id, name, email, role, created_at FROM users WHERE id=$1 
            `,
    [id],
  );

  return result;
};

export const userService = {
 
  getAllUserFromDB,
  getSingleUserFromDB,
};
