// pages/opportunities.js
import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Opportunities() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Grants & Media Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>🏆 July Grant for Women Founders – Due July 15</li>
          <li>📣 Submit to SheMedia’s Fall Spotlight – Ongoing</li>
          <li>📝 Add your media kit to our shared Notion board</li>
        </ul>
      </CardContent>
    </Card>
  );
}
