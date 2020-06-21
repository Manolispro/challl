//auth midle

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy; //how authendicated
const JwtStrategy = require("passport-jwt").Strategy;
const User= require("./models/User");

const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["acess_token"];
    
    }
    return token;
}
//authorization
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "NoobCoder"
},(payload,done)=>{
    //check if user exist
    User.findById({_id : payload.sub},(err,user)=>{
        if (err)
            return done(err,false);
        if(user)
            return done(null,user);
            else
            return done(null,false);
    });
}));
//for log in
passport.use(new LocalStrategy((username,password,done)=>{  //user and pass from client done when we done
    User.findOne({username},(err,user)=>{ //check if we can find the user
    //wrong with database
        if (err)
            return done(err);
    //no user
        if(!user)
            return done(null,false);
    //check if pass is correct
    user.comparePassword(password,done);

});
}));
