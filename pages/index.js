import { builder, BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';

// ✅ FIXED: API key wrapped in quotes
builder.init('381e5855759f41dcb2768e737d1919d7');

export default function Home() {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        const content = await builder.get('figma-imports', {
          url: window.location.pathname,
          userAttributes: {
            urlPath: window.location.pathname
          }
        }).promise();

        setPageData(content);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Builder content:', error);
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <BuilderComponent model="figma-imports" content={pageData} />
    </div>
  );
}