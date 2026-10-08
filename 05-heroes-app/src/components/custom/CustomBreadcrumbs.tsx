import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs }: Props) => {
  //   const { pathname } = useLocation();

  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        {/* Inicio */}
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link to="/" />}>Inicio</BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs?.map((crumb) => (
          <div className="flex items-center" key={crumb.label}>
            {/* <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbSeparator children={<SlashIcon />} /> */}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to={crumb.to} />}>
                {crumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}

        {/* Buscar */}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>

        {/* Otros */}
        {/* <BreadcrumbItem>
        <BreadcrumbSeparator />
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
