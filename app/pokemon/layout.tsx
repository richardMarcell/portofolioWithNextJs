import Footer from "@/libs/components/footer/page";
import Header from "@/libs/components/Header/page";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
