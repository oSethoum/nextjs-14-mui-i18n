import "@/app/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { NextIntlClientProvider } from "next-intl";
import theme from "@/theme";
import { Locale } from "@/i18n";
import AppCacheProvider from "@/components/AppCacheProvider";

export const metadata: Metadata = {
  title: "Nextjs app directory + i18n + mui",
  description: "Created by oSethoum",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const messages = await getMessages();
  const direction = locale == "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction}>
      <body className={`${roboto.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <AppCacheProvider direction={direction}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
