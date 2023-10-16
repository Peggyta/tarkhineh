import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import DashboardEditPage from "@/components/template/DashboardEditPage";

async function MyProfile() {
    await connectDB();
    const session = await getServerSession(authOptions);
    const[user] = await User.aggregate([
        {$match: {email: session.user.email}},
        {$lookup: {
            from: 'profiles',
            foreignField: 'userId',
            localField: '_id',
            as: 'profiles',
        }},
    ]);
    return <DashboardEditPage data={user.profiles} />
}
export default MyProfile;