// pages/directory.js

import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Directory() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Member Directory</h2>
        <p className="text-sm mb-4">
          Coming soon: a browsable list of our community’s brands, services, and offerings.
        </p>

        <div className="text-sm text-gray-500">
          🌟 Want to be featured? Join our email list or submit your info during launch week.
        </div>
      </CardContent>
    </Card>
  );
}
