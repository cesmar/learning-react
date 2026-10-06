import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de Super héroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      {/* Breadcrumbs */}
      <CustomBreadcrumbs
        currentPage="Buscar superhéroes"
        breadcrumbs={[
          { label: "Home1", to: "/" },
          { label: "Home2", to: "/" },
          { label: "Home3", to: "/" },
        ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
