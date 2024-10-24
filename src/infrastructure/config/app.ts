import express from "express";
import dotenv from "dotenv";
import authRouter from "../routes/authRoutes";
import sellerRouter from "../routes/sellerRoutes";
import adminRouter from "../routes/adminRoutes";
import productRoute from "../routes/productRoutes";
import cors from "cors";
import userRoute from "../routes/userRoutes";
import { swaggerDocs } from "../swagger/swaggerConfi";
import orderRoutes from "../routes/orderRoutes";
import webhook from "./services/webhook"; 
import http from 'http';  
import chatRoute from "../routes/chatRoutes";
import auctionRout from '../routes/auctionRoutes'

export const createServer = () => {
  try {
    const app = express();
    dotenv.config();

    // Parse JSON bodies
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ limit: '10mb', extended: true }));

    // CORS configuration
    app.use(cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true
    }));

    // Swagger Documentation
    app.use("/api-docs", swaggerDocs.serve, swaggerDocs.setup);

    // Routes
    app.use("/api/auth", authRouter);
    app.use("/api/user", userRoute);
    app.use("/api/seller", sellerRouter);
    app.use("/api/admin", adminRouter);
    app.use("/api/products", productRoute);
    app.use("/api/orders", orderRoutes);
    app.use("/api/chat", chatRoute);
    app.use('/api/auction',auctionRout)
    app.use("/api/webhook", webhook);

    const server = http.createServer(app);

    return { app, server };
  } catch (error) {
    console.error("Error creating server:", error);
    throw error;
  }
};
