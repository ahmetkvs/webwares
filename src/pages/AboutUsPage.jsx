import AboutCompaniesSection from "../components/aboutSections/AboutCompaniesSection";
import AboutHeroSection from "../components/aboutSections/AboutHeroSection";
import AboutInfoSection from "../components/aboutSections/AboutInfoSection";
import AboutVideoSection from "../components/aboutSections/AboutVideoSection";
import AboutWorkWithUsSection from "../components/aboutSections/AboutWorkWithUsSection";
import TeamMeetSection from "../components/teamSections/TeamMeetSection";

function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutInfoSection />
      <AboutVideoSection />
      <TeamMeetSection />
      <AboutCompaniesSection />
      <AboutWorkWithUsSection />
    </>
  );
}

export default AboutUsPage;
