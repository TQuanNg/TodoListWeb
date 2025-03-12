const { Client, Pool } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "todo_app",
  password: process.env.DB_PASS,
  port: "5432",
});

// Use async/await for connecting with the client
async function connectClient() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database!");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

connectClient();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo_app",
  password: "Wukong0905",
  port: "5432",
  max: 20, // number of clients
  idleTimeoutMillis: 30000,
});

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post("/add-task", async (req, res) => {
  const { title } = req.body;
  const { day } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Task title is required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO tasks (title, day, is_completed) VALUES ($1, $2, $3) RETURNING *`,
      [title, day, false]
    );

    res.status(201).json(result.rows[0]); // Respond with the newly created task
  } catch (error) {
    console.error("Error inserting task:", error.stack);
    res.status(500).json({ error: "Failed to add task" });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const { day } = req.query;
    const result = await pool.query("SELECT * FROM tasks WHERE day = $1", [
      day,
    ]);
    console.log(day);
    res.json(result.rows); // Respond with the list of tasks
  } catch (error) {
    console.error("Error fetching tasks:", error.stack);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM tasks WHERE task_id = $1", [id]);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

app.put("/tasks/:id", async (req, res) => {
  const { day } = req.body;
  const { id } = req.params;
  const { title } = req.body;
  try {
    const result = await pool.query(
      "UPDATE tasks SET title = $1, updated_at = CURRENT_TIMESTAMP WHERE task_id = $2 RETURNING *",
      [title, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
