import { Sidebar } from "@/components/admin/Sidebar";
import { TopBar } from "@/components/admin/TopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-soft-accent">
      <Sidebar />
      <TopBar />
      <main className="ml-64 pt-16">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}

