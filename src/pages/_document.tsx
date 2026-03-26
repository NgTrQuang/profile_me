/** Custom Document — sets lang, fonts, and viewport */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="vi" suppressHydrationWarning>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BYBD4887FY" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BYBD4887FY');
`,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
