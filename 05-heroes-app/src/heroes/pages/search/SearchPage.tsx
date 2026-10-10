import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";

import { SearchControls } from "./ui/SearchControls";
import { searchHeoresAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;
  console.log({ strength });
  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeoresAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

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

      {/* Hero Grid */}
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
