import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.ts";

export default function App() {
  return <RouterProvider router={router} />;
}
