const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
import { User } from "./models";
import { issueTokens } from "./functions/auth";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    console.log(profile)
    const { given_name, family_name, email, sub, id } = profile._json;
    // verificar que el user no exista en la DB
    const user = User.findOne({
      email: email,
    });
    if (user) {
      throw new Error("El email ya se encuentra registrado.");
    }
    // El registro es valido
    sub = bcrypt.hash(sub, 10);
    const newUser = User.create(profile._json);
    let tokens = issueTokens(newUser);
    return {
      user: newUser,
      ...tokens,
    };
  },
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
  done(err, user);
  });
});