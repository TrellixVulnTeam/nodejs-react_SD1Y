const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./routes/index");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
app.use(express.json());

// app.set("views", __dirname + "../views");
// app.set("view engine", "js");
// app.engine("js", require("express-react-views").createEngine());

// app.get("/aa", (req, res) => {
//     res.render("index", { name: "Rhapsodist" });
// });

var db;
MongoClient.connect(
    process.env.DB_URL,
    { useUnifiedTopology: true },
    function (error, client) {
        if (error) return console.log(error);
        db = client.db("plandb");

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    }
);

// MongoClient.connect(
//     "mongodb+srv://kangju2000:q1w2e3@cluster0.ierul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useUnifiedTopology: true },
//     function (error, client) {
//         if (error) return console.log(error);
//         db = client.db("plandb");

//         app.listen(5000, () => {
//             console.log(`Listening on port ${process.env.PORT}`);
//         });
//     }
// );

app.use(
    session({ secret: "비밀코드", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/fail",
    }),
    function (req, res) {
        console.log("완료");
    }
);

app.get("/mypage", 로그인했니, function (req, res) {
    res.render("");
});

function 로그인했니(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.send("로그인안하셨는데요?");
    }
}

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "pw",
            session: true,
            passReqToCallback: false,
        },
        function (inpEmail, inpPW, done) {
            db.collection("login").findOne(
                { email: inpEmail },
                function (err, doc) {
                    if (err) return done(err);
                    if (!doc)
                        return done(null, false, {
                            message: "존재하지않는 아이디입니다.",
                        });
                    if (inpPW == doc.pw) {
                        return done(null, doc);
                    } else {
                        return done(null, false, { message: "비번틀렸어요" });
                    }
                }
            );
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(function (email, done) {
    db.collection("login").findOne({ email: email }, function (err, doc) {
        done(null, doc);
    });
});

app.post("/register", function (req, res) {
    db.collection("login").insertOne(
        { email: req.body.email, pw: req.body.pw },
        function (err, doc) {
            console.log("회원가입 완료");
        }
    );
});

// ---------------------------------------
app.use(cors());
app.use("/api", api);
app.get("/api/hello", (req, res) => {
    res.send("하이요");
});
