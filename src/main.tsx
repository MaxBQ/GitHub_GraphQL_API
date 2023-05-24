import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "jotai/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apiClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <ApolloProvider client={client}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
