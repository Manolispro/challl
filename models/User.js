const mongoose = require("mongoose");
const bcrypt = require("bcrypt");//to encrypt password


const UserSchema = new mongoose.Schema({   //change when its done to email type or something
        username :{ 
            
            required: true,
             min: 6, 
             max:15 ,
             type : String  //something wrong min max not working
},

        password :{
            type :String,
            required: true
},
        role:{   //dont forget to add the ngo and mentor role
            type :String,
            enum: ['user','admin'],  //enum is for choosing only one of 2 roles only
            required:true
}
});

    UserSchema.pre("save",function(next){  //check if the password field is modified if yes dont encrypt
        if (!this.isModified("password"))
        return next();
    bcrypt.hash(this.password, 10,(err,passwordHash)=>{
        if (err)
        return next(err);
        this.password= passwordHash;
        next();

});  //10 how strong is the ecrpyption
});

UserSchema.methods.comparePassword = function(password,cb){  //check if the pass ismatch with the ecrypt version... 
    bcrypt.compare(password, this.password,(err, isMatch)=>{
        if(err)
        return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch);
            return cb(null,this);
        }
    });
}

module.exports = mongoose.model("User",UserSchema );


