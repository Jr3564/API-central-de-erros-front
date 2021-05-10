import React, { useEffect } from 'react';

export default function Loading() {
  let message = 'Loading...';
  useEffect(() => setTimeout(() => {
    message = 'Só mais um pouco. O servidor está acordando...';
  }, 5000), []);
  return (
    <h1>{message}</h1>
  );
}
