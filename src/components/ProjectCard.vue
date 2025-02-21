<script setup lang="ts">
import Card from './Card.vue';
// import { octokit, repoSearch, searchCommits } from '../../common/actions';
import { getRepository } from '../common/actions';


const { repo } = defineProps<{
  repo: string
}>();


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
const data = await getRepository({
  repo: repo
});
</script>


<template>
  <Card>
    <div class="preview">
    </div>
      <h4>
        {{ data?.name }}
      </h4>
      <p>
        {{ data?.description }}
      </p>
  </Card>
</template>


<style scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.preview {
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--accent);
  border-radius: 8px;
}

.info {
  width: 100%;
}

h4 {
  font-weight: 700;
}

p {
  all: initial;
  color: var(--text);
  cursor: inherit;
}
</style>
