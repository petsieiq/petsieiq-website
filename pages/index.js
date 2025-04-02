import { builder, BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';

// Initialize Builder with your organization's API key
builder.init('381e5855759f41dcb2768e737d1919d7');

export default function Home() {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the page content
    async function fetchContent() {
      try {
        const content = await builder.get('page', {
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

  // Show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show 404 if no content is found
  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <buil>ercomponent>
    </div>
  );
}