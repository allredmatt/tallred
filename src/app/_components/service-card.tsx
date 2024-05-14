import Container from "@/app/_components/container"

type Props = {
  iconLocation: string;
  serviceTitle: string;
  serviceDescription: string;
};

const ServiceCard = ( {iconLocation, serviceTitle, serviceDescription} : Props ) => {
  return(
    <Container>
      <img src={iconLocation} alt={`Icon to represent ${serviceTitle}`} className="mb-3 mr-auto ml-auto size-20"/>
      <h2 className="text-lg text-logo-red lg:text-xl leading-tight font-semibold min-h-14 text-center">{serviceTitle}</h2>
      <p className="text-base leading-relaxed mb-4">{serviceDescription}</p>
    </Container>
  )
}

export default ServiceCard;