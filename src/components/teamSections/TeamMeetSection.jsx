const teamMembers = [
  {
    id: 1,
    title: "Chief Treat Officer (CTO)",
    name: "Commander Fluff",
    desc: "Expert in sniffing out bugs & burying unused CSS. Demands payment in head scratches.",
    imgSrc:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    title: "Head of Random Button Placement",
    name: "Captain Quirk",
    desc: "Believes the best UI is an adventure. Hides easter eggs in the footer. Fueled by chaos.",
    imgSrc:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 3,
    title: "Guardian of the Curly Braces",
    name: "Seraphina Syntax",
    desc: "Ensures every semicolon finds its place. Speaks fluent JavaScript and sarcasm. Known to refactor dreams.",
    imgSrc:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 4,
    title: "User Retention Illusionist",
    name: "Barry Bounce-Rate",
    desc: "Makes users stay longer... sometimes by 'accidentally' breaking the back button. Mostly kidding!",
    imgSrc:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

function TeamMeetSection() {
  return (
    <section className="w-full pt-8 bg-[#FAFAFA]">
      <div className="w-4/5 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl text-black font-bold my-4">Meet our Team</h1>
          <p className="font-semibold text-sm text-gray-400">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-x-12">
          {teamMembers.map((member) => {
            return (
              <div className="bg-white">
                <img
                  className="w-2/3 aspect-square object-cover mx-auto rounded-full"
                  src={member.imgSrc}
                  alt={`${member.name} image`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamMeetSection;
