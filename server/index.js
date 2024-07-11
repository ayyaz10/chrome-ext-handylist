require("dotenv").config();
const express = require("express");
const supabase = require("./config/supabaseClient");
const cors = require("cors");
const app = express();

// app.use(cors());
app.use(express.json());

const fetchTasks = async () => {
  try {
    const { data, error } = await supabase.from("contact_task").select("*");
    if (error) {
      console.error("Error fetching quotes", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching quotes", error);
    return null;
  }
};
const fetchQuotes = async () => {
  try {
    const { data, error } = await supabase.from("quotes").select("*");
    if (error) {
      console.error("Error fetching quotes", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching quotes", error);
    return null;
  }
};

const insertTask = async (task) => {
  console.log(task);
  try {
    const { error } = await supabase.from("contact_task").insert(task);
    if (error) {
      console.error("Error inserting task", error);
    } else {
      return {
        inserted: true,
        msg: "Record has been inserted successfully",
      };
    }
  } catch (error) {
    console.error("Error fetching quotes", error);
  }
};

// Route to fetch quotes and send as JSON response
app.get("/api/quotes", async (req, res) => {
  try {
    const quotes = await fetchQuotes();
    if (!quotes) {
      res.status(500).json({ error: "Failed to fetch quotes" });
      return;
    }
    res.json(quotes);
  } catch (error) {
    console.error("Error handling request", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/api/tasks", async (req, res) => {
  const type = req.query.type;

  try {
    if (type === "whatsapp") {
      tasks = await fetchTasks();
      console.log(tasks);
      if (!tasks) {
        res.status(500).json({ error: "Failed to fetch quotes" });
        return;
      }
      res.json(tasks);
    }
  } catch (error) {
    console.error("Error handling request", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/addtask", async (req, res) => {
  // console.log(req.body);
  const response = await insertTask(req.body.requestConfig);
  console.log(response);
  res.send("helo");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
