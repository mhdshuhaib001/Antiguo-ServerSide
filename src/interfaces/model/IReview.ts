import mongoose, { Document } from "mongoose";

export interface IReview extends Document {
  sellerId: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  createdAt: Date;
}
