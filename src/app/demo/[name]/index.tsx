import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";
import { store } from "@/app/demo/[name]/blocks/store";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { hero } from "@/app/demo/[name]/components/hero";
import { login } from "@/app/demo/[name]/components/login";
import { logo } from "@/app/demo/[name]/components/logo";
import { productGrid } from "@/app/demo/[name]/components/product-grid";
import { promo } from "@/app/demo/[name]/components/promo";

// mvpblocks (registry barrel)
// Note: this barrel only exports named registry objects (no default export)
import * as mvpblocks from "@/app/demo/[name]/blocks/mvpblocks";

// ui
import { accordion } from "@/app/demo/[name]/ui/accordion";
import { alert } from "@/app/demo/[name]/ui/alert";
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { badge } from "@/app/demo/[name]/ui/badge";
import { breadcrumb } from "@/app/demo/[name]/ui/breadcrumb";
import { button } from "@/app/demo/[name]/ui/button";
import { calendar } from "@/app/demo/[name]/ui/calendar";
import { card } from "@/app/demo/[name]/ui/card";
import { chart } from "@/app/demo/[name]/ui/chart";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { dataTable } from "@/app/demo/[name]/ui/data-table";
import { datePicker } from "@/app/demo/[name]/ui/date-picker";
import { dialog } from "@/app/demo/[name]/ui/dialog";
import { dropdownMenu } from "@/app/demo/[name]/ui/dropdown-menu";
import { input } from "@/app/demo/[name]/ui/input";
import { menuBar } from "@/app/demo/[name]/ui/menu-bar";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { skeleton } from "@/app/demo/[name]/ui/skeleton";
import { slider } from "@/app/demo/[name]/ui/slider";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,

  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  chart,
  checkbox,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "menu-bar": menuBar,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,

  // mvpblocks
  // Map exported objects to route-safe, explicit keys that match registry.json item names.
  // These names must match the named exports coming from:
  // - 3dglobe.registry.tsx => export const globe3d
  // - app-hero.registry.tsx => export const appHero
  // - card-flip.registry.tsx => export const cardFlip
  // - circular-text.registry.tsx => export const circularText
  "mvpblocks-3dglobe": (mvpblocks as any).globe3d,
  "mvpblocks-app-hero": (mvpblocks as any).appHero,
  "mvpblocks-card-flip": (mvpblocks as any).cardFlip,
  "mvpblocks-circular-text": (mvpblocks as any).circularText,
  "mvpblocks-code-block-1": (mvpblocks as any).codeBlock1,
  "mvpblocks-contact-us-1": (mvpblocks as any).contactUs1,
  "mvpblocks-delete-project": (mvpblocks as any).deleteProject,
  "mvpblocks-designer-pricing": (mvpblocks as any).designerPricing,
  "mvpblocks-feature-steps": (mvpblocks as any).feature2,
  "mvpblocks-globe1": (mvpblocks as any).globe1,
  "mvpblocks-glow-card": (mvpblocks as any).glowCard,
  "mvpblocks-gradient-bars-preview": (mvpblocks as any).gradientBarsPreview,
  "mvpblocks-login-form-3": (mvpblocks as any).loginForm3,
  "mvpblocks-notebook-hero": (mvpblocks as any).notebookHero,

  "mvpblocks-pricing-2": (mvpblocks as any).pricing2,
  "mvpblocks-pricing-3": (mvpblocks as any).pricing3,
  "mvpblocks-pricing-4": (mvpblocks as any).pricing4,
  "mvpblocks-pricing-5": (mvpblocks as any).pricing5,
  "mvpblocks-pricing-with-modals": (mvpblocks as any).pricingWithModals,
  "mvpblocks-retro-card": (mvpblocks as any).retroCard,
  "mvpblocks-signin-modal": (mvpblocks as any).signinModal,
  "mvpblocks-signup-modal": (mvpblocks as any).signupModal,
  "mvpblocks-simple-pricing": (mvpblocks as any).simplePricing,
  "mvpblocks-skeleton-card-1": (mvpblocks as any).skeletonCard1,
};
