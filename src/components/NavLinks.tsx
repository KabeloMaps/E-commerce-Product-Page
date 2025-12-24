type NavItem = {
  name: string;
  href: string;
};

type NavLinksProps = {
  items: NavItem[];
  variant: "desktop" | "mobile";
};

const NavLinks = ({ items, variant }: NavLinksProps) => {
  const baseClasses =
    variant === "desktop"
      ? "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-black"
      : "block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-300";

  return (
    <>
      {items.map((item) => (
        <a key={item.name} href={item.href} className={baseClasses}>
          {item.name}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
