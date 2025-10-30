import express from "express";

const routerProducts = express.Router();


//Rutas de productos y eso :V
routerProducts.get('/', (req, res) => {
  console.log("entro en la ruta home actualizada ፨v")

  //error simulado y eso yo que se :>
    res.status(400);
    throw new Error("Error simulado y eso [|87()B");
    



    res.send('Hello World!')
})

routerProducts.post('/', (req, res) => {
  console.log("entro en la ruta home de post ፨v")
  const products=[
    {name: "camara profecional ፨v", id:"1"},
    {name: "micro profecional ፨v", id:"2"},
  ]
    res.json({"Productos: ":products});
})

export default routerProducts;