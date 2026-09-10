import venixoLogo from "@/assets/venixo-technologies.png.asset.json";
import zodeckLogo from "@/assets/zodeck-solutions.jpg.asset.json";

const clients = [
  {
    name: "Zodeck Solutions",
    logo: zodeckLogo.url,
    imageClassName: "size-20",
  },
  {
    name: "DaysTech Solutions",
    logo: null,
    imageClassName: "",
  },
  {
    name: "Venixo Technologies",
    logo: venixoLogo.url,
    imageClassName: "h-16 w-full max-w-52",
  },
] as const;

export function ClientLogos() {
  return (
    <section aria-labelledby="client-logos-title" className="border-b border-border bg-background py-12 sm:py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
          <div className="shrink-0 text-center lg:w-52 lg:text-left">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Trusted experience</p>
            <h2 id="client-logos-title" className="mt-2 text-xl font-bold text-foreground">
              Organizations we&apos;ve worked with
            </h2>
          </div>

          <ul className="grid flex-1 grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {clients.map((client) => (
              <li
                key={client.name}
                className="flex min-h-36 flex-col items-center justify-center gap-4 bg-card px-6 py-5"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={220}
                    height={100}
                    loading="lazy"
                    className={`${client.imageClassName} object-contain`}
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-20 place-items-center rounded-lg border border-border bg-surface text-2xl font-bold text-foreground"
                  >
                    DT
                  </span>
                )}
                <span className="text-center text-sm font-semibold text-foreground">
                  {client.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}