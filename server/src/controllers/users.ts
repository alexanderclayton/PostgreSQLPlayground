import { Request, Response } from "express";
import pool from "../config/index.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query("SELECT * FROM Users;");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const pgQuery = await pool.query(
      `INSERT INTO Users (name, email) VALUES ('${name}', '${email}');`
    );
    res.status(200).json(pgQuery);
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
