import { IsAdmin } from "@/app/actions/admin";
import { redirect } from "next/navigation";
export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isAdmin = await IsAdmin();


    if (!isAdmin) {
        redirect("/dashboard/analytics");
    }
    return <>{children}</>;
}
