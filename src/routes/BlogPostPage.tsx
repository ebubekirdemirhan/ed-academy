import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Yazı bulunamadı</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm text-sky-400">
          Tüm yazılara dön
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Link to="/blog" className="mb-6 inline-block text-xs text-slate-500 hover:text-sky-400">
        ← Tüm Yazılar
      </Link>
      <p className="text-[10px] font-semibold text-slate-500">{post.date}</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-slate-400">{post.summary}</p>
      <hr className="my-8 border-slate-800" />
      <div className="prose prose-invert max-w-none text-sm leading-relaxed text-slate-300">
        {post.content}
      </div>
    </section>
  );
}
