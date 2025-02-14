import { GlobalStore } from "../main";

function getFractionVisible(
  element: HTMLElement, scrollEl: HTMLElement
) {
  const padding = parseInt(window.getComputedStyle(element.parentElement!).paddingTop);
  const viewHeight = element.clientHeight;
  const viewTop = element.offsetTop + element.clientTop;
  const viewBottom = viewTop + element.clientHeight - element.clientTop;
  const scrollElTop = scrollEl.scrollTop + padding,
  scrollElBottom = scrollElTop + scrollEl.clientHeight - padding;

  const hiddenHeight =
    Math.max(0, scrollElTop - viewTop) +
    Math.max(0, viewBottom - scrollElBottom);

  const fractionHeight = (viewHeight - hiddenHeight) / (scrollEl.clientHeight - padding);

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
