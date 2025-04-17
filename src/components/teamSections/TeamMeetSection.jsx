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
    <section className="w-full py-16 lg:py-24 bg-[#FAFAFA]">
      <div className="w-11/12 md:w-10/12 lg:w-4/5 mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl text-black font-bold mb-4">Meet Our Team</h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="w-4/5 mx-auto lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {teamMembers.map((member) => {
            return (
              <div
                key={member.id}
                className="h-full bg-white flex flex-col items-center text-center p-6 gap-3 rounded-lg shadow-sm"
              >
                <div
                  className={`w-32 h-32 md:w-36 md:h-36 rounded-full p-1.5 flex items-center justify-center mb-2`}
                >
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={member.imgSrc}
                    alt={`${member.name}`}
                  />
                </div>
                <h3 className="text-sm text-sky-600 font-semibold">
                  {member.title}
                </h3>
                <h2 className="text-black font-bold text-base">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-500 px-2">{member.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamMeetSection;
