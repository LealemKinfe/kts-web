import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <p
          className="crumb text-quaternary  font-ubuntu text-xl bg-primary "
          key={crumb}
        >
          <Link to={currentLink}>{crumb} | </Link>
        </p>
      );
    });

  return <div className="breadcrumbs flex items-center min-w-[40rem] ml-[4rem]">{crumbs}</div>;
}
