
import express from "express";

const app = express();
const port = process.env.PORT ||2003
import rout from "./Routes/rout"
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Recipe {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
    adderName:string
  }

import recipes from "./Controller/recipeCont"  
//  let recipes: Array<Recipe> = [
//     { name: "HoneyCake", 
//     ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
//      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
//      adderName:"Dorit Guy"},
//      { name: "vanillaCake", 
//      ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
//       prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
//       adderName:"Gadi Guy"}
//   ]; 
//route
app.use("/api/get-recipe",rout)

app.use('/api/add-recipe',rout)

app.use('/api/check-recipe',rout)

app.use('/api/update-ing',rout)

app.use('/api/update-pre',rout)

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});


// app.post('/api/check-recipe', (req, res) => {
//   try {
//     const {adderName, recipeName } = req.body;
//     if(!adderName) throw new Error("adderName is required");
//     if(!recipeName) throw new Error("recipeName is required");
//     let myRecipe:any = {recipeName, adderName};
//     const recipeIndex = recipes.findIndex(recipe => recipe.name === myRecipe.recipeName);
//     if (recipeIndex===-1) throw new Error("recipeName not found")
//     const recipeAdderName = recipes[recipeIndex]['adderName'];
//     //console.debug(recipeAdderName,recipes[recipeIndex]);
//     if (recipeAdderName!==myRecipe.adderName){
//       throw new Error("This recipe was added by another user")
//     }else{
//       myRecipe=recipes[recipeIndex]
//       res.send({myRecipe})
//     }

//   } catch (error) {
//     res.send({ error: error.message });
//   }
// })

// app.post('/api/update-ing',(req, res) => {
//   try {
//     const {recipeName, myIng } = req.body;
//       if(!recipeName) throw new Error("name is required");
//       if(!myIng) throw new Error("ingredients are required");
//       console.debug(myIng[0])
//       let myInp:any={recipeName,myIng}
//       const recipeIndex = recipes.findIndex(recipe => recipe.name === myInp.recipeName);
//       if (recipeIndex===-1) throw new Error("recipeName not found")
//       console.debug(`recipeIndex: ${recipeIndex}`)
//       const len:number = myInp.myIng.length
//       for(let i:number=0;i<len;i++){
//          recipes[recipeIndex]["ingredients"][i]=myInp.myIng[i]
//       };
//       console.debug( recipes[recipeIndex])
//       let myRecipe:Recipe=recipes[recipeIndex]
//       res.send({myRecipe});
//     } catch (error) {
//       res.send({ error: error.message });
//     }
   
//   })

//   app.post('/api/update-pre',(req, res) => {
//     try {
//       const {recipeName, myPre } = req.body;
//         if(!recipeName) throw new Error("name is required");
//         if(!myPre) throw new Error("ingredients are required");
//         console.debug(myPre[0])
//         let myInp:any={recipeName,myPre}
//         const recipeIndex = recipes.findIndex(recipe => recipe.name === myInp.recipeName);
//         if (recipeIndex===-1) throw new Error("recipeName not found")
//         console.debug(`recipeIndex: ${recipeIndex}`)
//         const len:number = myInp.myPre.length
//         for(let i:number=0;i<len;i++){
//            recipes[recipeIndex]["prepareMode"][i]=myInp.myPre[i]
//         };
//         console.debug(recipes[recipeIndex]["prepareMode][0]"])
//         let myRecipe:Recipe=recipes[recipeIndex]
//         res.send({myRecipe});
//       } catch (error) {
//         res.send({ error: error.message });
//       }
//     })

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
//   })
