import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head className="scroll-smooth" style={{ scrollBehavior: "smooth" }} />
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
