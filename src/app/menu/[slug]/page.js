import connectDB from "@/utils/connectDB";
import TProduct from "@/models/TProduct";
import FoodDetail from "@/components/template/FoodDetail";

async function DetailsPage({params:{slug}}) {
    await connectDB();
    const foodDetails = await TProduct.findOne({slug: slug});
    if(!foodDetails) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید</h3>
    
    return  <FoodDetail details={JSON.parse(JSON.stringify(foodDetails))} />   
}
export default DetailsPage;