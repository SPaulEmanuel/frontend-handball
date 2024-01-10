import { NavbarLogin } from "@/components/shared/shared-layout/navbar-login";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavbarLogin />
      {children}
    </section>
  );
}
