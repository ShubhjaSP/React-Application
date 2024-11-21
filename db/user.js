const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        // required: true,
        trim: true
    },
    lname: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    address: {
        type: String,
        // required: true
    },
   
    mobile: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/, // Ensures a valid 10-digit number
    },
    password: {
        type: String,
        required: true
    },
   
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.password; // Ensures confirmPassword matches password
            },
            message: "Confirm password does not match the password."
        }
    },
});

module.exports = mongoose.model("Users", userSchema);
