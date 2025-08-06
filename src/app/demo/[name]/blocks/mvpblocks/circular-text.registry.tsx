import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";
import CircularText from "@/components/mvpblocks/circular-text";

export const circularText = {
  name: "Circular Text",
  components: {
    Default: (
      <ShellLayout>
        <CircularText text="Circular Text Animation • " />
      </ShellLayout>
    ),
  },
};
