import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/index";

const AboutPage = React.lazy(() => import("./pages/about-page/AboutPage"));
const BrandsPage = React.lazy(() => import("./pages/BrandsPage"));
const CareersPage = React.lazy(() => import("./pages/CareersPage"));

export const useRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path='/' exact>
          <MainPage id='page-wrap' />
        </Route>
        <Route path='/about' exact component={AboutPage} />
        <Route path='/brands' exact component={BrandsPage} />
        <Route path='/careers' exact component={CareersPage} />
      </Switch>
    </Suspense>
  );
};
