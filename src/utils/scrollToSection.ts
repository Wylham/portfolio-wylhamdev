const DEFAULT_HEADER_OFFSET = 96;
const CENTERED_SECTIONS = new Set(["portfolio"]);

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return header?.getBoundingClientRect().height ?? DEFAULT_HEADER_OFFSET;
}

function clampScrollTop(top: number) {
  const maxScrollTop = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
  return Math.min(Math.max(top, 0), maxScrollTop);
}

export function scrollToSection(selector: string, behavior: ScrollBehavior = "smooth") {
  const target = document.querySelector<HTMLElement>(selector);
  if (!target) return;

  const headerOffset = getHeaderOffset();
  const rect = target.getBoundingClientRect();
  const targetTop = window.scrollY + rect.top;
  const shouldCenter = target.id ? CENTERED_SECTIONS.has(target.id) : false;

  const scrollTop = shouldCenter
    ? targetTop - (headerOffset + Math.max(window.innerHeight - headerOffset - rect.height, 0) / 2)
    : targetTop - headerOffset;

  window.scrollTo({
    top: clampScrollTop(scrollTop),
    behavior,
  });
}
