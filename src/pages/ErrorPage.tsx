import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="container h-[100vh] w-full m-auto grid  justify-center justify-items-center content-center gap-3">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText}</i>
        </p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="container h-[100vh] w-full m-auto grid  justify-center justify-items-center content-center gap-3">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.message}</i>
        </p>
      </div>
    );
  }
  return null;
};
export default ErrorPage;
