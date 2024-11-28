"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['user', 'seller'],
        default: 'user',
    },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
