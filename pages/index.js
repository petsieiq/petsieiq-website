import { builder, BuilderComponent } from '@builder.io/react';

builder.init(381e5855759f41dcb2768e737d1919d7); // Your actual public API key

export default function Home() {
  return <BuilderComponent model="page" />;
}