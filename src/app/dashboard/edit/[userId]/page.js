
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import DashboardEditPage from "@/components/template/DashboardEditPage";

async function MyProfile({params: {userId}}) {
    await connectDB();
    const userProfile = await User.findOne({_id: userId});
    if(!userProfile) return <h3>مشکلی پیش آمده است. لطفاً دوباره امتحان کنید</h3>
    return <DashboardEditPage data={JSON.parse(JSON.stringify(userProfile))} />
}
export default MyProfile;