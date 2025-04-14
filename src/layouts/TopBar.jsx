import {
  Phone,
  Mail,
  Instagram,
  CirclePlay,
  Facebook,
  Twitter,
} from "lucide-react";

function TopBar({ isHome }) {
  let iconSize = isHome ? 24 : 16;

  return (
    <aside
      className={`
      hidden lg:block w-full py-4 text-white
      ${isHome ? "bg-row1third" : "bg-row2prim"}
    `}
    >
      <div
        className={`
          w-full flex items-center justify-between text-sm
          ${isHome ? "px-4" : "lg:w-4/5 lg:mx-auto px-4 lg:px-0"}
        `}
      >
        <div className={`flex gap-6`}>
          <span className="flex gap-1">
            <Phone fill="currentColor" size={iconSize} />
            <p>(555) 555-5555</p>
          </span>
          <span className="flex gap-1">
            <Mail size={iconSize} />
            <p>ahmetpkavas@gmail.com</p>
          </span>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className="flex gap-2 items-center">
          <p className="mr-2">Follow us:</p>
          <a href="#">
            <Instagram size={iconSize} />
          </a>
          <a href="#">
            <CirclePlay size={iconSize} />
          </a>
          <a href="#">
            <Facebook size={iconSize} />
          </a>
          <a href="#">
            <Twitter fill="currentColor" size={iconSize} />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default TopBar;
