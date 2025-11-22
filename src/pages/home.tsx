import { useEffect } from "react";

interface Link {
  url: string
}

export default function Home({ url }:Link) {
  useEffect(() => {
    window.location.href = url;
  }, []);

  return null;
}