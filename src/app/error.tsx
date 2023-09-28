"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>ERROR !!!</h1>
      <p>This is a sample error page message!</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
