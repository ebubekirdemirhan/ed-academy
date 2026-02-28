import { Button } from '../common/Button';

export function HomeMiniContactCTA() {
  return (
    <section className="border-t border-slate-800/60 bg-gradient-to-b from-sky-500/[0.03] to-transparent">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          İşinizi Dönüştürmeye Hazır mısınız?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
          Yapay zekanın büyümenizi nasıl hızlandırabileceğini keşfetmek için ücretsiz bir
          danışma planlayın.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/iletisim">İletişime Geçin</Button>
          <Button
            href="mailto:ebubekirdemirhaniletisim@gmail.com?subject=Kesif%20Gorusmesi"
            variant="ghost"
          >
            Ücretsiz Keşif Görüşmesi
          </Button>
        </div>
      </div>
    </section>
  );
}
