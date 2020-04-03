import React from "react";
import { HomePageSection } from "../pages/homePage";
export const appRoutes = [
  {
    path: "/",
    Component: HomePageSection
  },
  {
    path: "/blockDetails/:id",
    Component: () => <div>block details page</div>
  }
];
