//importing express
import express from "express";
const app = express();

//importing dependencies
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";

//importing routes
import brandRouter from './routes/brandRoutes.js'
import productRouter from './routes/productRoutes.js'
import favoriteRouter from './routes/favoritesRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoutes.js'


//configuring dependencies
app.use(express.static(path.join(process.cwd(), "public")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);


//connecting database
mongoose.connect(
  "mongodb+srv://ubaid_mern:izzaLbqGOr1Ze5D3@cluster0.ejtuxti.mongodb.net/shoeshub?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    else {
      console.log("Connected to database");
    app.use('/brand',brandRouter);
    app.use('/product',productRouter);
    app.use('/favorite',favoriteRouter);
    app.use('/cart',cartRouter);
    app.use('/order',orderRouter);
      app.listen(8000, () => {
        console.log("Server started...");
      });
    }
  }
);
