import Link from "next/link";
import { notFound } from "next/navigation";
import { homeTools } from "@/lib/home-tools";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return homeTools.map((t) => ({ slug: t.slug }));
}

export default function ToolPlaceholderPage({ params }: Props) {
  const tool = homeTools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  return (
    <div className="min-h-[70vh] bg-cream-200">
      <div className="container-main py-16 md:py-24 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wider text-cream-600 mb-3">
          Tools
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-forest-900 mb-4">
          {tool.title}
        </h1>
        <p className="text-forest-700/80 leading-relaxed mb-8">{tool.description}</p>
        <div className="rounded-2xl border border-cream-300 bg-white p-8 mb-8">
          <p className="text-sm text-forest-700/70">
            This tool is coming soon. We&apos;re building an interactive experience here —
            check back shortly.
          </p>
        </div>
        <Link href="/" className="btn-secondary text-sm inline-block">
          Back to home
        </Link>
      </div>
    </div>
  );
}
