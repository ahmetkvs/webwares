import { Section } from "lucide-react";
import CompLogo from "./CompLogo";

const brandLogos = [
  {
    src: "/assets/logos/EMCLogo.svg",
    alt: "Ellingson Mineral Corporation Logo",
    href: "https://en.wikipedia.org/wiki/Hackers_(film)",
  },
  {
    src: "/assets/logos/lyft-svgrepo-com.svg",
    alt: "Lyft Logo",
    href: "https://www.lyft.com/",
  },
  {
    src: "/assets/logos/robinhood-svgrepo-com.svg",
    alt: "RobinHood Logo",
    href: "https://robinhood.com/us/en/",
  },
  {
    src: "/assets/logos/stripe-svgrepo-com.svg",
    alt: "Stripe Logo",
    href: "https://stripe.com/",
  },
  {
    src: "/assets/logos/aws-svgrepo-com.svg",
    alt: "AWS Logo",
    href: "https://aws.amazon.com",
  },
  {
    src: "/assets/logos/reddit-svgrepo-com.svg",
    alt: "Reddit Logo",
    href: "https://www.reddit.com/",
  },
];

function BrandLogosSection() {
  return (
    <section className="my-16">
      <div className="w-4/5 mx-auto flex flex-col gap-y-8 lg:flex-row items-center lg:justify-between lg:flex-wrap">
        {brandLogos.map((brand) => {
          return <CompLogo href={brand.href} alt={brand.alt} src={brand.src} />;
        })}
      </div>
    </section>
  );
}

export default BrandLogosSection;
