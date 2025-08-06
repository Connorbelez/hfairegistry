import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

type ButtonVariant =
  | "outline"
  | "default"
  | "link"
  | "destructive"
  | "secondary"
  | "ghost";

const plans: {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonVariant: ButtonVariant | null | undefined;
  badge: string | null;
}[] = [
  {
    name: "Free",
    price: "$0 / mo",
    description: "Per editor",
    features: [
      "Basic Analytics Dashboard",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    buttonVariant: "outline",
    badge: null,
  },
  {
    name: "Pro",
    price: "$19 / mo",
    description: "Per editor",
    features: [
      "Everything in Free Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
      "Access to Community Forum",
      "Single User Access",
      "Access to Basic Templates",
      "Mobile App Access",
      "1 Custom Report Per Month",
      "Monthly Product Updates",
      "Standard Security Features",
    ],
    buttonVariant: "default",
    badge: "Popular",
  },
  {
    name: "Startup",
    price: "$29 / mo",
    description: "Per editor",
    features: [
      "Everything in Pro Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    buttonVariant: "outline",
    badge: null,
  },
];

export default function PricingTwo() {
  return (
    <section className="not-prose relative w-full py-16 md:py-32">
      <div className="-z-10 absolute inset-0 overflow-hidden">
        <div className="-top-[10%] -translate-x-1/2 absolute left-[50%] h-[40%] w-[60%] rounded-full bg-primary/10 blur-3xl" />
        <div className="-right-[10%] -bottom-[10%] absolute h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="-bottom-[10%] -left-[10%] absolute h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center font-semibold text-4xl lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire suite of APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.badge ? "border border-amber-300" : ""
              }`}
            >
              {plan.badge && (
                <span className="-top-3 absolute inset-x-0 mx-auto flex h-6 w-fit items-center rounded-full border-primary/20 bg-linear-to-br/increasing bg-primary from-purple-400 to-amber-300 px-3 py-1 font-medium text-amber-950 text-xs ring-1 ring-white/20 ring-inset ring-offset-1 ring-offset-gray-950/5">
                  {plan.badge}
                </span>
              )}

              <CardHeader>
                <CardTitle className="font-medium">{plan.name}</CardTitle>
                <span className="my-3 block font-semibold text-2xl">
                  {plan.price}
                </span>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant={plan.buttonVariant} className="w-full">
                  <Link href="">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
