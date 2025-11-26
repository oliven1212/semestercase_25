const app = require("./app");
const session = require("express-session");
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(
  session({
    secret: "12345",
    cookie: {
      secure: "false",
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  console.log(req.session);
  next();
});
