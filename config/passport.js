const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.js');
const dotenv = require('dotenv');

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: "338704929089-4oa097p18pga7tp77v3mm12bjegrf6lb.apps.googleusercontent.com",
  clientSecret:"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",
  callbackURL: "/auth/google/callback"
},
function(token, tokenSecret, profile, done) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
