import {
  SandboxLayout,
  SandboxPreview,
  SandboxProvider,
} from "@/components/ui/shadcn-io/sandbox";
import React from "react";
/** Batch 2 of MVPBlocks registry exports */

// 11) pricing-2
import PricingTwo from "@/components/mvpblocks/pricing-2";
export const pricing2 = {
  name: "Pricing 2",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <PricingTwo />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 12) pricing-3
import PricingThree from "@/components/mvpblocks/pricing-3";
export const pricing3 = {
  name: "Pricing 3",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <PricingThree />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 13) pricing-4
import PricingFour from "@/components/mvpblocks/pricing-4";
export const pricing4 = {
  name: "Pricing 4",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <PricingFour />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 14) pricing-5
import PricingSection from "@/components/mvpblocks/pricing-5";
export const pricing5 = {
  name: "Pricing 5",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <PricingSection />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 15) pricing-with-modals
import PricingPage from "@/components/mvpblocks/pricing-with-modals";
export const pricingWithModals = {
  name: "Pricing with Modals",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <PricingPage />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 16) retro-card
import RetroCard from "@/components/mvpblocks/retro-card";
export const retroCard = {
  name: "Retro Card",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <RetroCard />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 17) signin-modal
import SigninModal from "@/components/mvpblocks/signin-modal";
export const signinModal = {
  name: "Signin Modal",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <SigninModal />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 18) signup-modal
import SignupModal from "@/components/mvpblocks/signup-modal";
export const signupModal = {
  name: "Signup Modal",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <SignupModal />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 19) simple-pricing
import SimplePricing from "@/components/mvpblocks/simple-pricing";
export const simplePricing = {
  name: "Simple Pricing",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <SimplePricing />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 20) skeleton-card-1
import ShimmerCardOne from "@/components/mvpblocks/skeleton-card-1";
export const skeletonCard1 = {
  name: "Skeleton Card 1",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <ShimmerCardOne />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;
