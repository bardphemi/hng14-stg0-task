import app from "./app";

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});