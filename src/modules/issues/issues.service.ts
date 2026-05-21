import { pool } from "../../DB"
import type { Issue } from "./issue.interface"

const issueCreateIntoDB = async(payload: Issue) =>{

    const {title,description, type, status, reporter_id } = payload

    const result = await pool.query(`
        INSERT INTO issues 
        
        `)
}