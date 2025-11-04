import express from "express";
import Product from "../cols/products.js";

const routerProducts = express.Router();


//Rutas de productos y eso :V
routerProducts.get('/', (req, res) => {
  console.log("entro en la ruta home actualizada ፨v")

  //error simulado y eso yo que se :>
    res.status(400);
    throw new Error("Error simulado y eso [|87()B");
    



    res.send('Hello World!')
})

routerProducts.post("/", async(req,res,next)=>{
  console.log(req.body)
  if(!req.body.name||!req.body.description||!req.body.price){
    next(new Error("Missing required"));
    return;
  }
  const {name,description,price}=req.body;
  try{
    const new_product= new Product({
      name,
      description,
      price
    })
    await new_product.save();
    res.status(201).json(new_product);
  }catch(err){
    console.log(err);
    next(err);
  }
});

routerProducts.get("/:id", async(req,res,next)=>{
  const {id} = req.params;
  try{
    const found = await Product.findById(id);
    res.status(201).json(found);
  }catch(err){
    console.error(err);
    next(err);
  }
});

routerProducts.get("/", async(req,res,next)=>{
  try{
    const found = await Product.find();
    res.status(201).json(found);
  }catch(err){
    console.error(err);
    next(err);
  }
});



export default routerProducts;