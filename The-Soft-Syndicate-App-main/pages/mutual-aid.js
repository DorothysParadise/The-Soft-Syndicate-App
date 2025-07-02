// pages/mutual-aid.js

import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function MutualAid() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Mutual Aid Pool</h2>
        <p className="mb-2">
          Support a sister. Share your need. Whether it's childcare, a grant fee, or extra yarn for a launch — we got you.
        </p>
        <p className="text-sm text-gray-500">
          💌 In future updates, you'll be able to submit a request or offer support directly from this page.
        </p>
      </CardContent>
    </Card>
  );
}
