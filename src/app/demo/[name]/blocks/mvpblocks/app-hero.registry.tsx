import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";
import AppHero from "@/components/mvpblocks/app-hero";

export const appHero = {
  name: "App Hero",
  components: {
    Default: (
      <ShellLayout>
        <AppHero />
      </ShellLayout>
    ),
  },
};
