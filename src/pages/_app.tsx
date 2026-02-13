/** Next.js custom App — wraps all pages with theme provider, i18n, and layout */

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import I18nProvider from '@/components/I18nProvider';
import Layout from '@/layouts/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </I18nProvider>
  );
}
