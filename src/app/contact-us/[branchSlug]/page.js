import connectDB from "@/utils/connectDB";
import TBranch from "@/models/TBranch";
import BranchDetails from "@/components/template/BranchDetails";

async function BranchDetailsPage({params:{branchSlug}}){
    await connectDB();
    const branch = await TBranch.findOne({slug: branchSlug});
    if(!branch) return <h3>مشکلی پیش آمده است</h3>
    return <BranchDetails data={branch} />
};

export default BranchDetailsPage;