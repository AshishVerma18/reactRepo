const bcrypt=require("bcryptjs");

let user_detail={
    name:"Ashish Verma",
    Password:12345,
}
var salt = bcrypt.genSalt(user_detail,10);
console.log(salt);