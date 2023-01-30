const PDFDocument = require("pdfkit");
const express = require("express");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cc = require("./models/cc");
const http = require("http");
const expressLayouts = require("express-ejs-layouts");
const fs = require("fs");
const { google } = require("googleapis");
const courseRoutes = require("./routes/course");
const path = require("path");
var pdf = require("html-pdf");
const moment = require("moment");
const course = require("./models/course");
const session = require("express-session");
const flash = require("connect-flash");
const indexRouter = require("./routes/index");
const instructorRouter = require("./routes/instructor");
const examRouter = require("./routes/exam");
const homeRouter = require("./routes/home");
const exam = require("./models/exam");
const questions = require("./models/questions");
const traineeRouter = require("./routes/trainee");
const ccRouter = require("./routes/creditCard");
const pRouter = require("./routes/problem");
const ejs = require("ejs");
var cors = require("cors");
const video = require("./models/video");
const cookieParser = require("cookie-parser");
const trainees = require("./models/trainee");
const instructors = require("./models/instructor");
const courseCompletion = require("./models/courseCompletion");
const subtitles = require("./models/subtitle");
const vid = require("./models/video");
const bodyParser = require("body-parser");
const adminStrator = require("./routes/admin");
const traiNee = require("./routes/trainee");
const fx = require("money");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const MongoURI =
  "mongodb+srv://nacl:nacl123@aclademy.tijjyrv.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const port = process.env.PORT || "8000";

//app.use(express.json());
const maxAge = 3 * 24 * 60 * 60;

// routes

mongoose.connect(MongoURI).then(() => {
  console.log("MongoDB is now connected!");
  // Starting server
  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
});

const MongoDBStore = require("connect-mongo");
const {
  filterCoursesSubject,
  setCurrency,
} = require("./controllers/coursesController");
const { Session } = require("express-session");
const trainee = require("./models/trainee");
const instructor = require("./models/instructor");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//app.use(session(sessionConfig));
app.use(flash());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  checkDiscounts();
  // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Access-Control-Allow-Origin', true)
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
const createToken = (name) => {
  return jwt.sign({ name }, "supersecret", {
    expiresIn: maxAge,
  });
};

const checkDiscounts = async () => {
  const courses = await course.find({});
  const currentDate = new Date();
  for (let c of courses) {
    if (c.discount != 1 && new Date(c.discountDuration) <= currentDate) {
      console.log(currentDate, c.discountDuration);

      await course.findByIdAndUpdate(c._id, {
        discount: 1,
        discountDuration: "0",
      });
    }
    // console.log('coolio')
  }
};
const sessionConfig = {
  name: "session",
  secret: "123",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },

  store: MongoDBStore.create({ mongoUrl: MongoURI }),
};
app.use(session(sessionConfig));
app.use(flash());

app.use(examRouter);
app.use(indexRouter);
app.use(instructorRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", homeRouter);
app.use("/", courseRoutes);
app.use("/adminstrator", adminStrator);
app.use("/", courseRoutes);
app.use("/", traineeRouter);
app.use("/createCourses", courseRoutes);
app.use("/adminstrator", adminStrator);
app.use("/t", traiNee);
app.use("/", ccRouter);
app.use("/", pRouter);

app.get("/logout", async (req, res) => {
  sessionConfig.cookie.token = undefined;

  res.clearCookie("jwt");
  res.clearCookie("code");
  res.clearCookie("session");
  res.clearCookie("conversion");

  console.log(req.cookies);
  // console.log()
  res.send("done");
});
app.post("/login", async (req, res) => {
  const { userName, pass } = req.body;

  const instructor = await instructors.findOne({ userName: userName });
  const trainee = await trainees.findOne({ userName: userName });

  if (trainee && (await bcrypt.compare(pass, trainee.password))) {
    const token = createToken(trainee._id);
    // sessionConfig.cookie.token = token
    // res.cookie(token)
    // console.log(token)
    res.cookie("jwt", token);
    res.cookie("conversion", "24");
    res.cookie("code", "EGP");
    res.cookie("user", trainee._id);
    console.log(req.cookies);
    res.send({ mess: "", trainee });
  } else if (instructor && (await bcrypt.compare(pass, instructor.password))) {
    const token = createToken(instructor._id);
    // sessionConfig.cookie.token = token
    res.cookie("jwt", token);
    res.cookie("conversion", "24");
    res.cookie("code", "EGP");
    res.cookie("user", instructor._id);
    console.log(req.cookies);
    res.send({ mess: "", instructor });
  } else {
    console.log("ay8aga");
    res.send({ mess: "user or pass incorrect" });
  }
});
app.get("/getCookies", async (req, res) => {
  console.log(req.cookies);
});
app.post("/register", async (req, res) => {
  const { fName, lName, userName, email, pass, country, gender } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);
    const user = await trainees.create({
      userName: userName,
      email: email,
      password: hashedPassword,
      firstName: fName,
      lastName: lName,
      country: country,
      gender: gender,
    });
    res.send({ mess: "hi" });
    // const token = createToken(user._id);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    // res.status(200).json(user);
  } catch (error) {
    res.send({ mess: error.message });
  }
});

app.get("/forgetPass", async (req, res) => {
  const { email } = req.query;
  if (
    (await instructors.findOne({ email: email })) ||
    (await trainees.findOne({ email: email }))
  ) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "akarara2001@gmail.com",
        pass: "epaixfrltkfakrvl",
      },
    });

    const mailOptions = {
      from: "akarara2001@gmail.com",
      to: email,
      subject: "Password Change",
      html:
        "<p>Click <a href=http://localhost:3000/changePass?email=" +
        email +
        ">here</a> to reset your password</p>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }
    });
  } else {
    res.send({ mess: "there is not an account with this email" });
  }
});
const getVideoCount = async (coursee) => {
  const c = await course.findById(coursee).populate("subtitles");
  var count = 0;
  console.log(c);
  for (let i = 0; i < c.subtitles.length; i++) {
    for (let j = 0; j < c.subtitles[i].videos.length; j++) {
      count++;
    }
  }
  return count;
};
app.get("/getToken", async (req, res) => {
  const token = req.cookies.jwt;
  var t;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "supersecret", async (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.send({ message: "You are not logged in." });
        // res.redirect('/login');
      } else {
        t = decodedToken;
        const user =
          (await trainee.findById(t.name)) ||
          (await instructor.findById(t.name));
        console.log(user);
        res.send(user);
      }
    });
  } else {
    res.send({ message: "You are not logged in." });
  }
});
const getWacthedVideoCount = async (courseComp) => {
  var count = 0;
  for (let j = 0; j < courseComp.completion.length; j++) {
    if (courseComp.completion[j] == 1) count++;
  }

  return count;
};
app.get("/receiveCert", async (req, res) => {
  const { email } = req.query;
  const token = req.cookies.jwt;
  var t;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.status(401).json({ message: "You are not logged in." });
        // res.redirect('/login');
      } else {
        t = decodedToken;
      }
    });
  } else {
    res.status(401).json({ message: "You are not logged in." });
  }
  const CourseId = req.query.course;
  console.log(email, t, CourseId);
  const courseComp = await courseCompletion
    .findOne({ userId: t.name, courseId: mongoose.Types.ObjectId(CourseId) })
    .populate("courseId");
  const vidCount = await getVideoCount(CourseId);
  const watchedVidCount = await getWacthedVideoCount(courseComp);
  const trainee = await trainees.findById(t.name);
  const progress = (watchedVidCount / vidCount) * 100;
  {
    if (await trainees.findOne({ email: email })) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "akarara2001@gmail.com",
          pass: "epaixfrltkfakrvl",
        },
      });

      const mailOptions = {
        from: "akarara2001@gmail.com",
        to: email,
        subject:
          "Congratulations" +
          " " +
          trainee.userName +
          " " +
          "Receive Certificate for" +
          " " +
          courseComp.courseId.courseName,
        html:
          "<p>Click <a href=http://localhost:8000/certificate?cid=" +
          courseComp.courseId._id +
          "&uid=" +
          trainee._id +
          ">here</a>to receive your Certificate</p>",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send("Email sent: " + info.response);
          // do something useful
        }
      });
    } else {
      res.send({ mess: "there is not an account with this email" });
    }
  }
});

app.get("/recCert", async (req, res) => {
  res.send("mabrook");
});

app.post("/setCurrency", async (req, res) => {
  const c = await cc.findOne({ countryCode: req.body.country });
  var code;
  const response = await axios
    .get(
      `https://v6.exchangerate-api.com/v6/43b6a15bca2f1a3c5e37e43d/pair/USD/` +
        c.currencyCode
    )
    .then((res) => {
      code = res.data.conversion_rate;
    });

  // sessionConfig.cookie.currencyCode = code;
  res.cookie("conversion", code);
  res.cookie("code", c.currencyCode);
  console.log(req.cookies, code);
  res.send(code + "");
});

app.get("/getCurrency", async (req, res) => {
  res.send({ conversion: req.cookies.conversion, code: req.cookies.code });
});

app.post("/changePass", async (req, res) => {
  const { pass, email } = req.body;
  console.log(email);
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(pass, salt);
  console.log(
    await trainees.findOneAndUpdate(
      { email: email },
      { password: hashedPassword }
    )
  );
  console.log(
    await instructors.findOneAndUpdate(
      { email: email },
      { password: hashedPassword }
    )
  );
});
app.get("/viewCertificate", async (req, res) => {
  const { cid, uid } = req.query;
  const c = await course.findById(cid).populate("instructorID");
  const trainee = await trainees.findById(uid);
  const date = new Date();
  const month = date.getMonth() + 1;
  res.render("certificate", { date, month, c, trainee });
});

app.get("/certificate", async (req, res) => {
  const { cid, uid } = req.query;

  const file = fs.createWriteStream("../../file.pdf");
  const url = `http://localhost:8000/certificate?cid=${cid}&uid=${uid}`;
  pdf.create("certificate").toFile("certificate.pdf", function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
  // http.get(url, (res) => {
  //   const path = "downloaded-image";
  //   const writeStream = fs.createWriteStream(path);

  //   res.pipe(writeStream);

  //   writeStream.on("finish", () => {
  //     writeStream.close();
  //     console.log("Download Completed");
  //   });
  // });
});
// const setCurr = async () => {
//   const response = await fetch(
//     "https://v6.exchangerate-api.com/v6/43b6a15bca2f1a3c5e37e43d/pair/USD/GBP"
//   );
//   var data = await response.text();
//   console.log(data);
// };
// rating.insertMany({
//   traineeID: "635a68199855290994dc685a",
//   instructorID: "6356dd33cc353130bb028c22",
//   content: "Gamed Gedan",
//   rate: "5"
// })
