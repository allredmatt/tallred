import Container from "@/app/_components/container";
import ContactCard from "@/app/_components/contact-us-card";

export default function Index() {

  const contactMethods = [
    {icon: "/icons/email.svg", title: "Email", link:"mailto:a@b.c", description: "Email us to discuss your companies needs and solutions to your problems."},
    {icon: "/icons/x-logo.svg", title: "X (Twitter)", link:"https://www.x.com", description: "Chat with us on twitter to find out how we can help you."},
    {icon: "/icons/linkedin-logo.svg", title: "LinkedIn", link:"https://www.linkedin.com", description: "LinkedIn profile of our Tracey Allred, to see who you will be working with."}
  ]

  return (
    <main>
      <Container>
        <h1 className="pt-12 text-xl w-full text-center font-semibold">Contact Us</h1>
        <section className="flex-col md:flex-row flex items-center gap-3 md:justify-between mt-10 mb-16 md:mb-12">
          {contactMethods.map((method, index) => { return(
            <ContactCard
              key={index}
              iconLocation={method.icon}
              methodLink={method.link}
              methodTitle={method.title}
              methodDescription={method.description}
            />
          )})}
        </section>
      </Container>
    </main>
  );
}
