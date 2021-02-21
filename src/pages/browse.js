import { useContent } from "../hooks";
import selectionMap from "../utils/selection-map";

import BrowseComponent from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionMap({ series, films });
  console.log("slides: ", slides);
  return <BrowseComponent slides={slides} />;
}
