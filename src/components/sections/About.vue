<script setup lang="ts">
import Section from './Section.vue';
// import img from '/src/assets/tuankhainguy.jpeg';
</script>


<template>
  <Section>
    <div class="content">
      <h3>
        Hi, I'm
      </h3>
      <h2>
        TUAN KHAI NGUY
      </h2>
      <h4>
        CyberSec @ RMIT | Ex CS @ UniMelb | Ex Research SWE Intern @ WEHI
      </h4>
      <div id="profile">
        <p>
          Aspiring software engineer experienced with leadership and creative roles. Seeking to apply skills in leadership, problem-solving, and innovation in research or software engineering position. Experienced with various programming languages, frameworks and tools. Always curious and eager to learn.
        </p>
      </div>
    </div>
    <!-- <template v-slot:secondary> -->
    <!--   <div id="profilePicture"> -->
    <!--     <div id="pictureWrapper"> -->
    <!--       <img :src="img" /> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </template> -->
  </Section>
</template>


<style scoped>
h2 {
  font-weight: 700;
  background:
    linear-gradient(to bottom right, var(--highlight6) -50%, var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

h4 {
  margin: 2rem;
}

h2, h3, h4 {
  width: 100%;
}

p {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--base);
  padding: 12px;
}

.section {
  height: max-content;
  min-height: max-content;
  padding-bottom: 10rem;
}

.sectionContent {
  height: max-content;
}

#profile {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#profile > p:before {
  z-index: -1;
  border-radius: 10px;
  position: absolute;
  inset: calc(-0.2rem);
  background:
    linear-gradient(to right, var(--accent), var(--highlight6));
  content: '';
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: auto;
}

#profilePicture {
  --border-radius: 12px;
  border-radius: var(--border-radius);
  width: max-content;
  height: max-content;
  max-width: min(240px, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--base);
  position: relative;
  margin-top: 8rem;
}

#profilePicture:before {
  z-index: -1;
  border-radius: var(--border-radius);
  position: absolute;
  inset: calc(0.2rem * -1);
  background:
    linear-gradient(to right, var(--accent), var(--highlight6));
  content: '';
}

#profilePicture > #pictureWrapper {
  border-radius: var(--border-radius);
  width: max-content;
  height: max-content;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

#profilePicture img {
  width: 100%;
  height: 100%;
}

.section :deep(.secondary) {
  justify-content: start;
  align-items: center;
}


@media only screen and (max-width: 768px) {
  .section {
    padding-bottom: 2rem;
  }
/*   #profile { */
/*     padding: 12px; */
/*   } */
/**/
/*   #profile > p:before { */
/*     inset: calc(12px - 0.2rem); */
/*   } */
/**/
/*   h2, h3, h4 { */
/*     padding-inline: 12px; */
/*   } */
/**/
/*   .content { */
/*     margin-top: 2rem; */
/*   } */
/**/
/*   #profilePicture { */
/*     margin-top: 2rem; */
/*   } */
}
</style>
