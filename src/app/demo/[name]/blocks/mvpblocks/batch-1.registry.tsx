import {
  SandboxLayout,
  SandboxPreview,
  SandboxProvider,
} from "@/components/ui/shadcn-io/sandbox";
import React from "react";
/** This file aggregates multiple MVPBlocks registry exports. */

// 1) code-block-1
import CodeBlock from "@/components/mvpblocks/code-block-1";
export const codeBlock1 = {
  name: "Code Block 1",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <CodeBlock />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 2) contact-us-1
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
export const contactUs1 = {
  name: "Contact Us 1",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <ContactUs1 />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 3) delete-project
import DeleteProject from "@/components/mvpblocks/delete-project";
export const deleteProject = {
  name: "Delete Project",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <DeleteProject />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 4) designer-pricing
import DesignerPricing from "@/components/mvpblocks/designer-pricing";
export const designerPricing = {
  name: "Designer Pricing",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <DesignerPricing />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 5) feature-2
import FeatureSteps from "@/components/mvpblocks/feature-2";
export const feature2 = {
  name: "Feature 2",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <FeatureSteps />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 6) globe1
import Globe1 from "@/components/mvpblocks/globe1";
export const globe1 = {
  name: "Globe 1",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <Globe1 />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 7) glow-card
import GlowingCard from "@/components/mvpblocks/glow-card";
export const glowCard = {
  name: "Glow Card",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <GlowingCard />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 8) gradient-bars-preview
import GradientBarsPreview from "@/components/mvpblocks/gradient-bars-preview";
export const gradientBarsPreview = {
  name: "Gradient Bars Preview",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <GradientBarsPreview />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 9) login-form-3
import SignInPage from "@/components/mvpblocks/login-form-3";
export const loginForm3 = {
  name: "Login Form 3",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <SignInPage />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;

// 10) notebook
import NotebookHero from "@/components/mvpblocks/notebook";
export const notebookHero = {
  name: "Notebook Hero",
  components: {
    Default: (
      <SandboxProvider template="react">
        <SandboxLayout>
          <div className="h-full w-full p-4">
            <NotebookHero />
          </div>
        </SandboxLayout>
      </SandboxProvider>
    ),
  },
} as const;
