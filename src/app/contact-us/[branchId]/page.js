import connectDB from "@/utils/connectDB";
import TBranch from "@/models/TBranch";
import BranchDetails from "@/components/template/BranchDetails";

async function BranchDetailsPage({params:{branchId}}){
    await connectDB();
    const branch = await TBranch.findOne({_id: branchId});
    if(!branch) return <h3>مشکلی پیش آمده است</h3>
    return <BranchDetails data={branch} />
};

export default BranchDetailsPage;