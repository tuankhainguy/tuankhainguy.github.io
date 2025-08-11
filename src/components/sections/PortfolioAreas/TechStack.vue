<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const { group } = defineProps<{
  group?: string
}>();

const list = useTemplateRef("list");

onMounted(() => {
  list.value?.children.length
    ? list.value?.style.setProperty("animation-duration", `${Math.max(list.value?.children.length * 2, 5)}s`)
    : null;

  Array.from(list.value?.children ?? []).forEach((card) => {
    const duplicatedCard = card.cloneNode(true) as HTMLElement;
    duplicatedCard.setAttribute("aria-hidden", "true");
    duplicatedCard.id = card.id;
    duplicatedCard.classList.add("duplicate");
    list.value?.appendChild(duplicatedCard);
  });

  list.value?.style.setProperty("animation-delay", `-${Math.round(Math.random() * 10)}s`);
});
</script>


<template>
  <div :id="group" class="infiniteList" data-group>
    <div class="innerContainer" ref="list">
      <slot />
    </div>
  </div>
</template>


<style scoped>
div[data-group] {
  width: 80%;
  height: max-content;
  /* gap: 24px; */
  display: flex;
  align-content: flex-start;
  overflow: hidden;
}
/**/
/* div[data-group] > div { */
/*   list-style-type: none; */
/*   width: 100%; */
/*   height: 100%; */
/*   display: flex; */
/*   justify-content: center; */
/*   align-items: center; */
/* } */

.innerContainer {
  --gap: 12px;
  gap: var(--gap);
  padding-top: 16px;
  padding-bottom: 16px;
  width: max-content;
  height: 100%;
  display: flex;
  position: relative;
  min-width: 200%;
  animation: scroll 5s linear infinite;
}

.innerContainer :deep(div) {
  width: 100%;
  display: flex;
  justify-content: center;
}

.infiniteList {
  display: flex;
  overflow-x: hidden;
  -webkit-mask:
    linear-gradient(to right, transparent, white 20% 80%, transparent);
  mask:
    linear-gradient(to right, transparent, white 20% 80%, transparent);
}


@media only screen and (max-width: 570px) {
  div[data-group] {
    width: 100%;
  }

  .innerContainer {
    --scroll-speed: 10s;
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    /* animation: scroll var(--scroll-speed) linear infinite; */
    /* somehow this is necessary for the mask to show on grandchildren elements */
    /* but this is not added in Kevin Powell tutorial */
    -webkit-mask:
      linear-gradient(to right, white, white);
    mask:
      linear-gradient(to right, white, white);
  }

  .innerContainer > :deep(.card) {
    width: 70dvw;
  }
}

@keyframes scroll {
  to { transform: translateX(calc(-50% - var(--gap) / 2)); }
}
</style>
