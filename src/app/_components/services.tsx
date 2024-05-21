import ServiceCard from "./service-card";

const Services = () => {
    return (
      <section className="flex-col md:flex-row flex items-start md:justify-between mt-16 mb-16 md:mb-12">
        <ServiceCard
          key={1}
          iconLocation="/icons/form-icon.svg"
          serviceTitle="Digital"
          serviceDescription="Details to add on the digital work you do." 
        />

        <ServiceCard
          key={2}
          iconLocation="\icons\hierarchy-management-icon.svg"
          serviceTitle="Strategy"
          serviceDescription="What is the strategy things you want posting in here." 
        />

        <ServiceCard
          key={3}
          iconLocation="/icons/replace-icon.svg"
          serviceTitle="Transformation"
          serviceDescription="Some things about how you support transformation." 
        />

        <ServiceCard
          key={4}
          iconLocation="/icons/connect-people-icon.svg"
          serviceTitle="User Centred Policy Design"
          serviceDescription="User Centred Policy Design details to be added." 
        />

      </section>
    );
};

export default Services;