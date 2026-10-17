import { notFound } from "next/navigation";
import { FeaturePage } from "@/components/feature/FeaturePage";
import { featureKeyFromSlug, featureSlugs } from "@/content/featurePages";
import { buildFeatureMetadata } from "../../../../siteMetadata";

/** `/en/features/<menu>/`: pasangan berbahasa Inggris dari `/fitur/<menu>/`. */
export const dynamicParams = false;

export function generateStaticParams() {
  return featureSlugs("en").map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const key = featureKeyFromSlug("en", (await params).slug);
  if (!key) notFound();
  return buildFeatureMetadata(key, "en");
}

export default async function FeaturesPage({ params }: Props) {
  const key = featureKeyFromSlug("en", (await params).slug);
  if (!key) notFound();
  return <FeaturePage featureKey={key} locale="en" />;
}
