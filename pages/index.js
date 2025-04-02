// pages/index.js
import { builder, BuilderComponent } from '@builder.io/react';

builder.init('381e5855759f41dcb2768e737d1919d7'); // your real API key

export default function Home() {
  return (
    <BuilderComponent
      model="page"
      contentLoaded={(content) => {
        if (!content) {
          console.warn('❌ No Builder content found for model "page" with URL "/"');
        }
      }}
      contentError={(error) => {
        console.error('❌ Error loading Builder content:', error);
      }}
    />
  );
}