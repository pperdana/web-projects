import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleCocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: SingleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "newsLetter",
        element: <NewsLetter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
