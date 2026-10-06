import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "cn";
import { Link, useLocation } from "react-router";

export const CustomMenu = () => {
  const { pathname } = useLocation();
  //   console.log({ pathname });

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            // className="bg-slate-200 rounded-md p-2"
            className={cn(isActive("/") && "bg-slate-200", "rounded-md")}
            render={<Link to="/" />}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            // className="bg-slate-200 rounded-md p-2 ml-1"
            className={cn(isActive("/search") && "bg-slate-200", "rounded-md")}
            render={<Link to="/search" />}
          >
            Buscar superhéroes
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
