type Props = {
    iconLocation: string;
    methodTitle: string;
    methodDescription: string;
    methodLink: string;
  };
  
  const ContactCard = ( {iconLocation, methodLink, methodTitle, methodDescription} : Props ) => {
    return(
      <a href={methodLink} className="w-full bg-logo-white hover:bg-logo-red group rounded-lg" target="_blank">
        <span className="flex flex-row flex-nowrap items-end">
            <img src={iconLocation} alt={`Icon to represent ${methodTitle}`} className="size-12 fill-logo-white group-hover:fill-logo-white rounded-ss-lg" />
            <h2 className="w-full h-12 text-lg bg-logo-red text-logo-white lg:text-xl leading-tight font-semibold ps-4 pt-4 rounded-se-lg">{methodTitle}</h2>
        </span>
        <p className="p-2 text-base group-hover:text-logo-white text-justify leading-relaxed mb-4">{methodDescription}</p>
      </a>
    )
  }
  
  export default ContactCard;

  //group-hover:bg-logo-white group-hover:text-logo-red