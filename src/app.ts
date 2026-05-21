import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import config from "./config/env";
import { initDB, pool } from "./DB";
const app: Application = express();


app.use(express.json());



app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Express Server",
    author: "Sazzad Hasan",
  });
});

app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const result = await pool.query(
      `
    INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING name, email, role
    `,
      [name, email, password, role],
    );
    console.log(result);

    res.status(201).json({
      message: "Created successfully!!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
      //   data: result.rows[0],
    });
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
            SELECT * FROM users
            `);
    res.status(200).json({
      success: true,
      message: "Users retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
            SELECT * FROM users WHERE id=$1
            `,
      [id],
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Users retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

export default app