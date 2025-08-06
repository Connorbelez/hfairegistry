import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";
import Globe3D from "@/components/mvpblocks/3dglobe";

export const globe3d = {
  name: "3D Globe",
  components: {
    Default: (
      <ShellLayout>
        <Globe3D />
      </ShellLayout>
    ),
  },
};
