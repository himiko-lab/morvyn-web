import { notFound } from "next/navigation";
import { FeaturePage } from "@/components/feature/FeaturePage";
import { featureKeyFromSlug, featureSlugs } from "@/content/featurePages";
import { buildFeatureMetadata } from "../../../siteMetadata";

/**
 * `/fitur/<menu>/`: satu halaman per menu, bahasa Indonesia.
 *
 * Kedelapan alamatnya dibuat saat build dari `featureSlugs`. `dynamicParams`
 * dimatikan karena situs ini diekspor statis: alamat yang tidak ada di daftar
 * memang tidak punya berkasnya, dan GitHub Pages membalasnya dengan 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return featureSlugs("id").map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const key = featureKeyFromSlug("id", (await params).slug);
  if (!key) notFound();
  return buildFeatureMetadata(key, "id");
}

export default async function FiturPage({ params }: Props) {
  const key = featureKeyFromSlug("id", (await params).slug);
  if (!key) notFound();
  return <FeaturePage featureKey={key} locale="id" />;
}
