import type { Request, Response } from "express";

const createIssue = async(req:  Request, res: Response)=>{

    try {
        const result = 
    } catch (error: any) {
        res.status(500).json({
      message: error.message,
      error: error,
      //   data: result.rows[0],
    });
    }
}

export const  issueController = {
createIssue
}