import ServiceCard from "./service-card";

const Services = () => {
    return (
      <section className="flex-col md:flex-row flex items-start md:justify-between mt-16 mb-16 md:mb-12">
        <ServiceCard
          key={1}
          iconLocation="/icons/form-icon.svg"
          serviceTitle="Digital"
          serviceDescription="Digital stuff goes here, all about your work." 
        />

        <ServiceCard
          key={2}
          iconLocation="\icons\hierarchy-management-icon.svg"
          serviceTitle="Strategy"
          serviceDescription="Digital stuff goes here, all about your work." 
        />

        <ServiceCard
          key={3}
          iconLocation="/icons/replace-icon.svg"
          serviceTitle="Transformation"
          serviceDescription="Digital stuff goes here, all about your work." 
        />

        <ServiceCard
          key={4}
          iconLocation="/icons/connect-people-icon.svg"
          serviceTitle="User Centred Policy Design"
          serviceDescription="Digital stuff goes here, all about your work." 
        />

      </section>
    );
};

export default Services;