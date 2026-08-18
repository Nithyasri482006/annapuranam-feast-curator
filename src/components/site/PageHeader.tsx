import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="veil absolute inset-0" />
      <div className="scrim absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <span className="gold-rule mt-7" />
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
