import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroStats } from "@/heroes/components/HeroStats";
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Eye,
  Filter,
  Gauge,
  Grid,
  Heart,
  MoreHorizontal,
  Plus,
  Search,
  Shield,
  SortAsc,
  Zap,
} from "lucide-react";
import { SearchControls } from "../search/ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
// import Image from "next/image";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Super héroes"
          description="Descubre, explora y administra super héroes y villanos"
        />
        {/* <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Superhero Universe
          </h1>
          <p className="text-gray-600 text-lg">
            Discover, explore, and manage your favorite superheroes and villains
          </p>
        </div> */}

        {/* Breadcrumbs */}
        <CustomBreadcrumbs currentPage="Super héroes" />

        {/* Stats Dashboard */}
        <HeroStats />
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Characters
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16</div>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                  12 Heroes
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  2 Villains
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* <SearchControls /> */}
        {/* Controls */}
        {/* <div className="flex flex-col lg:flex-row gap-4 mb-8">
          Search
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search heroes, villains, powers, teams..."
              className="pl-12 h-12 text-lg"
            />
          </div>

          Action buttons
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort by Name
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <Grid className="h-4 w-4" />
            </Button>

            <Button className="h-12">
              <Plus className="h-4 w-4 mr-2" />
              Add Character
            </Button>
          </div>
        </div> */}

        {/* Advanced Filters */}
        {/* <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Advanced Filters</h3>
            <Button variant="ghost">Clear All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Team</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All teams
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All categories
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Universe</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All universes
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All statuses
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">
              Minimum Strength: 0/10
            </label>
            <div className="relative flex w-full touch-none select-none items-center mt-2">
              <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                <div
                  className="absolute h-full bg-primary"
                  style={{ width: "0%" }}
                />
              </div>
              <div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors" />
            </div>
          </div>
        </div> */}

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab("favorites")}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            {/* <h1>Todos los personajes</h1> */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            {/* <h1>Favoritos</h1> */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            {/* <h1>Héroes</h1> */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            {/* <h1>Villanos</h1> */}
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Results info */}
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div> */}

        {/* Character Grid */}
        {/* <HeroGrid /> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> */}
        {/* Hero Card 1 - Superman */}
        {/* <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Superman"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              Status indicator
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/90 text-gray-700"
                >
                  Active
                </Badge>
              </div>

              Universe badge
              <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
                DC
              </Badge>

              Favorite button
              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </Button>

              View details button
              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">Superman</h3>
                  <p className="text-sm text-gray-600">Clark Kent</p>
                </div>
                <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
                  Hero
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                Justice League
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                The Last Son of Krypton, protector of Earth and symbol of hope
                for all humanity.
              </p>

              Stats
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              Powers
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Super Strength
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Flight
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-gray-100">
                    +4 more
                  </Badge>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t">
                First appeared: 1938
              </div>
            </CardContent>
          </Card> */}

        {/* Pagination */}
        <CustomPagination totalPages={8} />
        {/* <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div> */}
      </>
    </>
  );
};
