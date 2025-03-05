<script setup lang="ts">
import Section from './Section.vue';

const copyToClipboard = async (el: Element) => {
  if (!el.textContent) { return; }
  const email = el.textContent;

  try {
    await navigator.clipboard.writeText(email);
    el.textContent = 'Copied to clipboard';
    setTimeout(() => {
      el.textContent = email;
    }, 2000);
  } catch (error) {
    el.textContent = 'Failed to copy to clipboard';
    setTimeout(() => {
      el.textContent = email;
    }, 2000);
    console.error('Failed to copy to clipboard. Error=' + error);
  }
}

const handleEmailButton = (e: Event) => {
  const email = (e.currentTarget as HTMLElement).nextElementSibling?.firstElementChild;
  if (!email || !email.textContent) { return; }

  copyToClipboard(email);
}
</script>


<template>
  <Section>
    <ul id="contactLinks">
      <li class="iconsContainer">
        <button type="button" @click="handleEmailButton">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-mail">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
          </svg>
        </button>
        <div id="emailContainer">
          <p>khaint0204@gmail.com</p>
        </div>
      </li>
      <li class="iconsContainer">
        <a href="https://www.linkedin.com/in/tuan-khai-nguy-5b33b3287/" target="_blank">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
          </svg>
        </a>
      </li>
      <li class="iconsContainer">
        <a href="https://github.com/tuankhainguy" target="_blank">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
          </svg>
        </a>
      </li>
    </ul>
  </Section>
</template>


<style scoped>
.section {
  min-height: max-content;
  margin-bottom: var(--app-empty-space);
}

#contactLinks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-flow: row;
  gap: 12px;
}

.iconsContainer {
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  gap: 8px;
  position: relative;
}

button, a {
  border: 0.3rem solid var(--text);
  border-radius: 12px;
  padding: 8px;
  transition: border-color .2s ease-in-out, color .2s ease-in-out;
}

button + #emailContainer {
  position: absolute;
  bottom: calc(100% + 12px);
  overflow: hidden;
  height: 0;
  transition: height .2s ease-in-out, color .2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

@media only screen and (min-width: 769px) {
  button:hover,
  a:hover {
    color: var(--highlight4);
    border-color: var(--highlight4);
  }

  button:hover + #emailContainer {
    height: 100%;
    color: var(--highlight4);
  }

  .icon {
    width: 3rem;
    height: 3rem;
  }
}

@media only screen and (max-width: 768px) {
  .section {
    margin-bottom: 2.5rem;
  }

  #contactLinks {
    grid-template-rows: unset;
    grid-auto-flow: row;
  }

  button + #emailContainer {
    position: relative;
    bottom: unset;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .section :deep(.primary) {
    align-items: start;
  }

  .iconsContainer {
    justify-content: start;
  }
}
</style>
