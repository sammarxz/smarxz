import { isBrowser } from "framer-motion";

const scrollToTop = () => {
  if (!isBrowser) return;
  window.scrollTo({ top: 0 });
}

export { scrollToTop }