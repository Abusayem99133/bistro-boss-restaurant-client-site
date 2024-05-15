const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mt-12 mb-12 md:w-3/12 text-center items-center mx-auto">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h3 className="uppercase text-4xl  border-y-8 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
