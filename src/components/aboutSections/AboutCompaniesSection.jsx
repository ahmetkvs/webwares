import BrandLogosSection from "../homeSections/BrandLogosSection/BrandLogosSection";

function AboutCompaniesSection() {
  return (
    <>
      <section className="w-full my-8">
        <div className="flex flex-col justify-center items-center w-2/3 mx-auto">
          <h1 className="text-3xl text-center font-bold text-black">
            Big Companies Are Here
          </h1>
          <p className="text-sm font-semibold text-center my-8 text-gray-500">
            Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
            fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
            malesuada lacinia integer nunc posuere.
          </p>
        </div>
      </section>
      <BrandLogosSection />
    </>
  );
}

export default AboutCompaniesSection;
