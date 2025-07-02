
import Link from "next/link";
import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Welcome to The Soft Syndicate</h2>
        <p>This space was created to share grants, media referrals, mutual support, and creative collaborations for Black women business owners and makers.</p>
        <div className="space-y-2">
          <Button className="w-full" asChild>
            <Link href="/opportunities">Explore Opportunities</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/directory">View Member Directory</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/mutual-aid">Mutual Aid Pool</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
