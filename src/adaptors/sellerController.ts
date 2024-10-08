import { Seller } from "../interfaces/model/seller";
import SellerUseCase from "../use-case/sellerUsecase";

import { Request, Response } from "express";

class SellerController {
  constructor(private readonly _sellerUseCase: SellerUseCase) {}

  async createSeller(req: Request, res: Response) {
    try {
      const sellerData = req.body;
      console.log("Output:seller data", sellerData);

      const result = await this._sellerUseCase.createSeller(sellerData);
      res.status(result.status).json(result);
    } catch (error) {}
  }

  async createProduct(req: Request, res: Response) {
    try {
      const productData = req.body;
      const sellerId = req.body.sellerId;

      const images: string[] = req.body.images;

      const result = await this._sellerUseCase.createProduct(
        productData,
        images
      );

      res
        .status(result.status)
        .json({ message: result.message, productData: result.productData });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Error creating product." });
    }
  }

  async fetchSellerProducts(req: Request, res: Response) {
    try {
      const sellerId = req.params.sellerId;

      const products = await this._sellerUseCase.fetchSellerProducts(sellerId);
      res.status(products.status).json(products);
    } catch (error) {
      console.error("Error product:", error);
      res.status(500).json({ message: "Error creating product." });
    }
  }

  async deleteProduct(req:Request,res:Response){
    try {
        const productId = req.params.productId
        console.log(productId,'controllers productId ')
        const response = await this._sellerUseCase.deleteProduct(productId)
        res.status(response.status).json({response})
    } catch (error) {
        console.error("Error product:", error);
        res.status(500).json({ message: "Error product removeing time." });
    }
  }
  async getProduct(req:Request,res:Response){
    try {
       
        const productId = req.params.productId
        const product = await this._sellerUseCase.getProduct(productId)
        res.status(product.status).json(product)

    } catch (error) {
        console.error("Error product:", error);
        res.status(500).json({ message: "Error product getting time." });
    }
  }

  async getAllProduct(req: Request, res: Response) {
    try {
      const products = await this._sellerUseCase.getAllProducts(); 
      res.status(products.status).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Error fetching products." });
    }
  }
  
}

export default SellerController;
