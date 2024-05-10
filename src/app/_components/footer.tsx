import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-light border-t border-neutral-200">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg lg:text-[1.25rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Site built by:
            <a
              href="https://matt.allred.digital"
              className="mx-3 font-bold hover:underline"
            >
              Matt Allred
            </a>
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
