import { GlobalStore } from "../main";
import { z } from "zod";



const FormSchema = z.object({
  name: z.string().min(1, { message: "This field needs to be filled."}),
  email: z
    .string()
    .min(1, { message: "This field needs to be filled."})
    .email({ message: "Possibly not an email. Email is required." }),
  message: z.string().min(1, { message: "This field needs to be filled."}),
})


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

  if (!GlobalStore.currentSection) { return; }

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


type FormBody = {
  name: string,
  email: string,
  message: string
}

async function submitContactForm(formBody: FormBody, func?: (value?: object) => void) {
  try {
    const reqBody = FormSchema.parse(formBody);
    const apiServer = import.meta.env.VITE_FORM_BACKEND;

    if (!apiServer) throw new Error("API Server not found");

    const data = await fetch(`${apiServer}/api/form`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())

    console.log(data);
    if (func) func(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed: ", error.issues[0]);
    } else {
      console.error(error);
    }
  }
}


export {
  getFractionVisible,
  selectTab,
  submitContactForm,
}
