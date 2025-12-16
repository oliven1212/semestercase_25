const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const { startCronJob } = require("./utility/deleteOldImgs");

const path = require("path");
const nodeMailer = require("nodemailer");

// const multer = require("multer");
// const upload = multer({ dest: "public/uploads/" });
// const fs = require("fs");

const routes = require("./routes");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    partialsDir: path.join(__dirname, "views"),
    helpers: {
      //Works like the if handlebar helper, but checks if 2 values are equal ( == )
      ifEq: function (a, b, options) {
        if (a == b) {
          return options.fn(this);        // true block
        }
        return options.inverse(this);     // else block
      },
    },
  }),
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

//kan være vi skal oprette en ENV. fil til secret
app.use(
  session({
    secret: "12345",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use((req, res, next) => {
  res.locals.user = req.session.user || 1;
  console.log(req.session);
  next();
});

app.use((req, res, next) => {
  if (req.session.user) {
    const permissionLevel = req.session.user.role;
    res.locals.permissionLevel = permissionLevel;
  }
  next();
});

// Routes
app.use("/", routes);

startCronJob();


module.exports = app;
