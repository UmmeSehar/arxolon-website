import React from "react";
import { useLocation } from "react-router-dom";

export default function LeftSocialBar() {
  const { pathname } = useLocation();

  if (pathname !== "/") return null;

  const socials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!",
      hoverBg: "group-hover:bg-emerald-500",
      iconBg: "bg-emerald-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/arxolontechnologies/",
      hoverBg: "group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-amber-500",
      iconBg: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61596798540089",
      hoverBg: "group-hover:bg-[#1877F2]",
      iconBg: "bg-[#1877F2]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arxolon-technologies-430625451",
      hoverBg: "group-hover:bg-[#0A66C2]",
      iconBg: "bg-[#0A66C2]",
    },
  ];

  return (
    <div className="fixed left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
          className={`group h-10 sm:h-11 w-10 sm:w-11 hover:w-36 sm:hover:w-40 rounded-full ${item.iconBg} ${item.hoverBg} text-white flex items-center pl-2.5 shadow-lg transition-all duration-300 overflow-hidden`}
        >
          <span className="font-extrabold text-xs sm:text-sm shrink-0 w-6 text-center">
            {item.name === "WhatsApp"
              ? "WA"
              : item.name === "Instagram"
              ? "IG"
              : item.name === "Facebook"
              ? "FB"
              : "IN"}
          </span>
          <span className="ml-2 text-xs sm:text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}