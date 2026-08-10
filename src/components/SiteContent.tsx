import { Header } from "./Header";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Overview } from "./sections/Overview";
import { Connected } from "./sections/Connected";
import { FeatureDetails } from "./sections/FeatureDetails";
import { NewsSources } from "./sections/NewsSources";
import { HowItWorks } from "./sections/HowItWorks";
import { Faq } from "./sections/Faq";
import { DownloadCta } from "./sections/DownloadCta";
import { Footer } from "./sections/Footer";
import { JsonLd } from "./JsonLd";
import { getDictionary, type Locale } from "@/content";

/**
 * Seluruh halaman beranda dalam satu bahasa.
 *
 * Dipakai dua kali: oleh `app/page.tsx` (Indonesia, di `/`) dan
 * `app/en/page.tsx` (Inggris, di `/en`). Tidak ada middleware maupun
 * pengalihan, jadi situsnya tetap bisa diekspor statis.
 */
export function SiteContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <Stats dict={dict} />
        <Overview dict={dict} />
        <Connected dict={dict} />
        <FeatureDetails dict={dict} />
        <NewsSources dict={dict} />
        <HowItWorks dict={dict} />
        <Faq dict={dict} />
        <DownloadCta dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
