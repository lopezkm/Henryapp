const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
import { User } from "./models";
import { issueTokens } from "./functions/auth";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
    async (accessToken, refreshToken, profile, done) =>{
    const { given_name, family_name, email, sub } = profile._json;
    // verificar que el user no exista en la DB
   
   const user = await User.findOne({
      email: email,
    }) 
     if (user) {
      
      throw new Error("El email ya se encuentra registrado.");
    } 
    // El registro es valido
    const registerUser = {name: given_name, lastname: family_name, email, password: sub}
    const newUser = await User.create(registerUser);
    let tokens = await issueTokens(newUser);
     
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