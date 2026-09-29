import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi Deep | Frontend Developer" },
      { name: "description", content: "Sakshi Deep is a frontend developer and MCA student building responsive, modern and visually polished web experiences." },
      { property: "og:title", content: "Sakshi Deep | Frontend Developer" },
      { property: "og:description", content: "Frontend developer building thoughtful, responsive and visually polished digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
