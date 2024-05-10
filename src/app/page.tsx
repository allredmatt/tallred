import Link from "next/link";
import Container from "@/app/_components/container";
import Menu from "@/app/_components/menu"
import CompanyInfo from "@/app/_components/company"
import Footer from "@/app/_components/footer";


export default function Index() {

  return (
    <main>
      <Container>
        <Menu />
        <CompanyInfo />
      </Container>
    </main>
  );
}
