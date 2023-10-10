import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import userpic from '../../../public/images/userpic.png';
//icons
import HeartIcon from "../icons/HeartIcon";
import WalletIcon from "../icons/WalletIcon";
import PanelUser from "../icons/PanelUser";
import SLocation from "../icons/SLocation";
import LogoutButton from "../module/LogoutButton";
import Waiting from "../icons/Waiting";

async function DashboardSidebar({children, role}) {
    const session = await getServerSession(authOptions);
    return (
        <div className="border border-bordercolor rounded-md pt-4 pb-5 px-4 w-64">
            <div className="flex justify-between items-end">
                <div className="border border-bordercolor rounded-full w-fit">
                    <Image src={userpic} alt="profile-pic" width={88} height={88} />
                </div>
                <div className="text-raven font-semibold">
                    {role === 'ADMIN' ? 'ادمین': 'کاربر ترخینه'}
                    <p className="text-neutral text-sm">{session?.user.email}</p>
                </div>
            </div>
            <div className="border-b border-bordercolor py-2"></div>
            <div className="flex flex-col text-raven gap-3 pt-2">
                <Link className="flex items-center gap-1" href='/dashboard'><PanelUser />پروفایل</Link>
                <Link className="flex items-center gap-1" href='/dashboard/my-orders'><WalletIcon/>پیگیری سفارشات</Link>
                <Link className="flex items-center gap-1" href='/dashboard/my-intrests'><HeartIcon />علاقمندی‌ها</Link>
                <Link className="flex items-center gap-1" href='/dashboard/my-address'><SLocation />آدرس‌های من</Link>
                {role === 'ADMIN' ? <Link className="flex items-center gap-1" href='/admin'>
                <Waiting />در انتظار تایید</Link> : null}
                <LogoutButton />
            </div>
            <div>{children}</div>
        </div>
    )
}
export default DashboardSidebar;