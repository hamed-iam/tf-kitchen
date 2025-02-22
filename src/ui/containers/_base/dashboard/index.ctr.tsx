import { Button } from "@/packages/ui/components";
import { useDashboard } from "@/hooks/_base";

export default function DashboardCTR() {
  const { roya } = useDashboard();

  return (
    <>
      <Button type="primary">رویا ایز</Button>
      <Button type="dashed">رویا ایز</Button>
      <Button>رویا ایز</Button>
    </>
  );
}
