import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plan = {
  name: "Suite Enterprise",
  price: 300,
  description: "For your company of any size",
  features: [
    "First premium advantage",
    "Second advantage weekly",
    "Third advantage donate to project",
    "Fourth, access to all components weekly",
  ],
  includes:
    "Security, Unlimited Storage, Payment, Search engine, and all features",
  companies: [
    {
      name: "Nvidia",
      logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
      height: 20,
    },
    {
      name: "Column",
      logo: "https://html.tailus.io/blocks/customers/column.svg",
      height: 16,
    },
    {
      name: "GitHub",
      logo: "https://html.tailus.io/blocks/customers/github.svg",
      height: 16,
    },
    {
      name: "Nike",
      logo: "https://html.tailus.io/blocks/customers/nike.svg",
      height: 20,
    },
  ],
};

export default function PricingFour() {
  return (
    <div className="relative w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-16 md:py-32 dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      <div className="-z-10 absolute inset-0 overflow-hidden">
        <div className="-top-[10%] -translate-x-1/2 absolute left-[50%] h-[40%] w-[60%] rounded-full bg-primary/10 blur-3xl" />
        <div className="-right-[10%] -bottom-[10%] absolute h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="-bottom-[10%] -left-[10%] absolute h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Transform the way you manage your company
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empower your team with the tools they need to succeed. Flexible,
            scalable, and built for the modern enterprise.
          </p>
        </div>
        <div className="mt-10 md:mt-20">
          <div className="relative rounded-3xl border border-zinc-200/60 bg-card shadow-xl shadow-zinc-950/5 backdrop-blur-sm dark:border-zinc-700/50 dark:bg-zinc-900/70">
            <div className="grid items-center gap-12 divide-y divide-zinc-200 p-12 md:grid-cols-2 md:gap-x-2 md:divide-x-0 md:divide-y-0 dark:divide-zinc-700">
              {/* Left Side */}
              <div className="pb-12 text-center md:pr-12 md:pb-0">
                <h3 className="font-semibold text-2xl">{plan.name}</h3>
                <p className="mt-2 text-lg">{plan.description}</p>
                <span className="mt-12 mb-6 inline-block font-extrabold text-6xl text-primary">
                  <span className="align-super text-4xl">$</span>
                  {plan.price}
                </span>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="shadow-md">
                    <Link href="#">Get started</Link>
                  </Button>
                </div>
                <p className="mt-12 text-muted-foreground text-sm">
                  Includes: {plan.includes}
                </p>
              </div>

              {/* Right Side */}
              <div className="relative m-3">
                <div className="text-left">
                  <h4 className="mb-4 font-medium text-lg">What’s included:</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-1 size-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-muted-foreground text-sm">
                  Team size is flexible; add or switch members as needed.
                  Companies using our platform include:
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-start gap-6">
                  {plan.companies.map((company, i) => (
                    <img
                      key={i}
                      className="h-5 w-auto dark:invert"
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      height={company.height}
                      width="auto"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
