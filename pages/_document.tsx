import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
