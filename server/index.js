require("dotenv").config();
const express = require("express");
const supabase = require("./config/supabaseClient");
const cors = require("cors");
const app = express();

// app.use(cors());
app.use(express.json());

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

// Route to fetch quotes and send as JSON response
app.get("/api/quotes", async (req, res) => {
  console.log(req.body);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
