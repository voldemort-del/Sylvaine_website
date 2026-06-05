import SeriesPageTemplate from "@/components/SeriesPageTemplate";
import { getSeriesById } from "@/lib/data";

export const metadata = {
  title: "Collections — Sylviane Paris",
};

export default function Studies() {
  const series = getSeriesById("studies")!;
  return <SeriesPageTemplate series={series} />;
}
