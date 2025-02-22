import { DashboardCTR } from "@/ui/containers/_base";
import Authorized from "@/ui/layouts/Authorized";

export default function Home() {
  return (
    <Authorized>
      <DashboardCTR />
    </Authorized>
  );
}
