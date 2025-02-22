import { Navbar, Sidebar } from "@/ui/components/_shared";

export default function Authorized({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="block h-16 p-5 sm:hidden">
        <Navbar />
      </div>
      <div className="flex min-h-screen w-full text-gray-900">
        <div className="sticky top-0 hidden h-screen w-[256px] sm:block">
          <Sidebar />
        </div>

        <main className="flex w-full flex-col overflow-y-auto p-2 md:p-8">
          {children}
        </main>
      </div>
    </>
  );
}
