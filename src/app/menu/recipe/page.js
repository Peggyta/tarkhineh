import connectDB from "@/utils/connectDB";
import TProduct from "@/models/TProduct";
import RecipeCategory from "@/components/template/RecipeCategory";

async function RecipePage({searchParams}) {
    await connectDB();
    const foodData = await TProduct.find();
    const foodRecipe = foodData.filter((i)=> i.recipe === searchParams.recipe);
      
    return <RecipeCategory data={foodRecipe} />
};
export default RecipePage;