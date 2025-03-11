<script setup lang="ts">
// import { octokit, repoSearch, searchCommits } from '../../common/actions';
import { onMounted, useTemplateRef } from 'vue';
import Card from '../../Card.vue';
import { useRouter } from 'vue-router';
import { useProjectsStore } from '../../../stores/projects';
import { assets } from '../../../main';

const router = useRouter();

const { repo, imgSrc } = defineProps<{
  repo: string,
  imgSrc?: string
}>();

const projects = useProjectsStore();

// const data: any = await fetch('https://api.github.com/repos/tuankhainguy/tuankhainguy.github.io')
//   .then((res) => res.json())
//   // .then((_data) => console.log(_data));
//   // .then((_data) => fetch(`https://api.github.com/repos/tuankhainguy/tuankhainguy.github.io/git/blobs/${_data.sha}`))
//   // .then((res) => res.json())
//   // .then((_data) => JSON.parse(atob(_data.content)));
//
// console.log(data);
// const data: any = await fetch('https://api.github.com/users/tuankhainguy/repos')
//   .then((res) => res.json())
//
// console.log(data);
//
// console.log(await octokit.rest.users.getByUsername({
//   username: 'tuankhainguy'
// }));
//
// const getRepoNames = async () => {
//   let pageNum: number = 1;
//   let length = 0;
//
//   do {
//     const res = await searchCommits({ page: pageNum });
//     const data = res.data;
//     length = data.items.length;
//     console.log(data);
//
//     const repos: string[] = [...new Set(data.items.map((item) => item.repository.name))];
//     console.log(repos);
//
//     pageNum++;
//   } while (length > 0);
// }
//
// getRepoNames();
//
// const pdfCoder = await getRepository({
//   owner: "JoelBasile",
//   repo: "pdf-coder"
// });
// console.log(pdfCoder);
//
// const aia = await getRepository({
//   owner: "algorithms-in-action",
//   repo: "algorithms-in-action.github.io"
// });
// console.log(aia);
const project = (await projects.getProject(repo))!;
project.imgSrc = imgSrc;

const onClick = () => {
  if (!project.data.name) { return; }
  router.push(`/project/${project.data.name}`);
}

const card = useTemplateRef("card");

if (project) onMounted(() => {
  // the duplicate to be replaced
  const duplicate = document.getElementById(repo);
  if (!duplicate) { return; }

  const parent = duplicate.parentElement;
  const cardEl = card.value?.$el.cloneNode(true) as HTMLElement;
  if (!cardEl) { return; }

  cardEl.classList.add("duplicate");
  cardEl.onclick = onClick;

  parent?.replaceChild(cardEl, duplicate);
});
</script>


<template>
  <Card ref="card" :onclick="onClick">
    <div class="preview">
      <img :src="assets[imgSrc ?? '']?.default ?? ''" :alt="project.name" />
    </div>
    <div class="info">
      <h4>
        {{ project.name ?? project.data?.name }}
      </h4>
      <p>
        {{ project.data?.description }}
      </p>
    </div>
  </Card>
</template>


<style scoped>
.card {
  position: relative;
  width: 100%;
  /* for aspect-ratio to work at least width or height must not be set */
  height: unset;
  aspect-ratio: 3 / 4;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.preview {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--accent);
  border-radius: 8px;
  overflow: clip;
}

.preview > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  /* not in p tag because line-height depends on parent */
  /* child line-height cannot be smaller than parent */
  /* https://stackoverflow.com/questions/12851792/why-cant-i-decrease-the-line-height-of-this-text */
  line-height: 10%;
}

h4 {
  font-weight: 700;
  line-height: initial;
}

p {
  all: initial;
  color: var(--text);
  cursor: inherit;
  line-height: 1.6;
  margin-top: 2rem;
}


@media only screen and (max-width: 768px) {
  /* .card { */
  /*   --scroll-delay: 10s; */
  /* } */
}
</style>
