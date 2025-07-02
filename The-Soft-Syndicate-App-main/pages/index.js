import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Hello from The Soft Syndicate ✨
      </h1>
    </div>
  )
}

    <Layout>
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Welcome to The Soft Syndicate</h2>
          <p>This community is dedicated to helping Black women creatives and founders connect, grow, and rise — together.</p>
          <div className="space-y-2">
            <Button><a href="/opportunities">Explore Opportunities</a></Button>
            <Button><a href="/directory">View Member Directory</a></Button>
            <Button><a href="/mutual-aid">Mutual Aid Pool</a></Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
