import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Error</h1>
      <pre>{error.stack}</pre>
      <pre>{(error as Error & { statusText?: string }).statusText}</pre>
      <pre>{error.message}</pre>
    </div>
  );
}
