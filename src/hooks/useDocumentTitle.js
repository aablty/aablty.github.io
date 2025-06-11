// React
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `aablty${title ? ` / ${title}` : ""}`;
  }, [title]);
}
