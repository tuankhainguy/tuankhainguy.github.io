import { GlobalStore } from "../main";

function getFractionVisible(
  element: HTMLElement, scrollEl: HTMLElement
) {
  const paddingTop =
    parseInt(window.getComputedStyle(element.parentElement!).paddingTop) +
    parseInt(window.getComputedStyle(element.parentElement!.parentElement!).paddingTop);
  const paddingBottom =
    parseInt(window.getComputedStyle(element.parentElement!).paddingBottom) +
    parseInt(window.getComputedStyle(element.parentElement!.parentElement!).paddingBottom);
  const viewHeight = element.clientHeight;
  const viewTop =
    element.offsetTop + parseInt(window.getComputedStyle(element).borderTop);
  const viewBottom =
    viewTop + element.clientHeight -
      parseInt(window.getComputedStyle(element).borderBottom);
  const scrollElTop = scrollEl.scrollTop + paddingTop;
  const scrollElBottom =
    scrollElTop + scrollEl.clientHeight - paddingTop - paddingBottom;

  const hiddenHeight =
    Math.max(0, scrollElTop - viewTop) +
    Math.max(0, viewBottom - scrollElBottom);

  const fractionHeight =
    (viewHeight - hiddenHeight) /
      Math.min((scrollEl.clientHeight - paddingTop - paddingBottom), viewHeight);

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
