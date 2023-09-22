import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();

  return (
		<>
    <main id="error-page">
        <i>{error.statusText || error.message}</i>
    </main>
	</>
  );

}