import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="portal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
