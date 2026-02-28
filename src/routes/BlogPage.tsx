import { blogPosts } from '../data/blogPosts';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:pt-24">
          <SectionHeader
            eyebrow="Blog"
            title="Son Yazılar"
            description="Yapay zeka, yazılım geliştirme ve finansal piyasalar üzerine düşüncelerim ve rehberlerim."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-2">
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <p className="text-[10px] font-semibold text-slate-500">{post.date}</p>
              <h3 className="mt-2 text-base font-semibold">{post.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{post.summary}</p>
              <Button to={`/blog/${post.slug}`} variant="ghost" className="mt-5 text-xs">
                Devamını Oku
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
