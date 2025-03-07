import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Funding = lazy(() => import("@/pages/Funding"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/funding",
        element: (
          <Suspense
            fallback={
              <div>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </div>
            }
          >
            <Funding />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
