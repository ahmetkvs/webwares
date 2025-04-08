import {
  Phone,
  Mail,
  Instagram,
  CirclePlay,
  Facebook,
  Twitter,
} from "lucide-react";

function TopBar() {
  return (
    <aside className="hidden lg:flex w-full justify-between text-sm py-4 px-4 bg-row1third text-white">
      <div className="flex gap-6">
        <span className="flex gap-1">
          <Phone fill="currentColor" />
          <p>(555) 555-5555</p>
        </span>
        <span className="flex gap-1">
          <Mail />
          <p>ahmetpkavas@gmail.com</p>
        </span>
      </div>
      <p>Follow Us and get a chance to win 80% off</p>
      <div className="flex gap-2">
        <p className="mr-2">Follow us:</p>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <CirclePlay />
        </a>
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Twitter fill="currentColor" />
        </a>
      </div>
    </aside>
  );
}

export default TopBar;
