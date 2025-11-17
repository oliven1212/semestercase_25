const app = require("./app");
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://91.98.73.200/:${PORT}`);
});

