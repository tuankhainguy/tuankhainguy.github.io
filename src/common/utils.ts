import { GlobalStore } from "../main";

function getFractionVisible(
  element: HTMLElement, scrollEl: HTMLElement
) {
  const viewHeight = element.clientHeight;
  const viewTop = element.offsetTop + element.clientTop - 16;
  const viewBottom = viewTop + element.clientHeight + 16;
  const scrollElTop = scrollEl.scrollTop + scrollEl.offsetTop,
  scrollElBottom = scrollElTop + scrollEl.clientHeight;

  const hiddenHeight =
    Math.max(0, scrollElTop - viewTop) +
    Math.max(0, viewBottom - scrollElBottom);

  const fractionHeight = (viewHeight - hiddenHeight) / viewHeight;

  return fractionHeight;
}

function selectTab(tab: HTMLElement) {
  const value: string | undefined = tab.dataset.section;

  if (!GlobalStore.currentSection!.tab) {
    // can do this because we are not removing any nodes
    tab.parentElement?.childNodes.forEach((node) => {
      (node as HTMLElement).classList.remove("active");
    });
  } else {
    GlobalStore.currentSection!.tab.classList.remove("active");
  }

  if (value && GlobalStore.sections![value]) {
    tab.classList.add("active");

    GlobalStore.currentSection =
      GlobalStore.sections![value];
  }
}


export {
  getFractionVisible,
  selectTab
}
