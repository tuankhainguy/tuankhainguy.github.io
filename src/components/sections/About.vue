<script setup lang="ts">
import Section from './Section.vue';
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
        SWE Intern @ WEHI | CS @ UniMelb
      </h4>
      <div id="profile">
        <p>
          I'm a 3rd year Bachelor of Science (Computing and Software Systems) student at The University of Melbourne experienced with leadership and creative roles. Seeking to apply skills in leadership, problem-solving, and innovation in research or software engineering position. Experienced with various programming languages, frameworks and tools. Always curious and eager to learn.
        </p>
      </div>
    </div>
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

h2, h3, h4 {
  padding-inline: 36px;
  width: 100%;
}

p {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--base);
  padding: 12px;
}

#profile {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 36px;
}

p:before {
  z-index: -1;
  border-radius: 10px;
  position: absolute;
  inset: calc(36px - 0.2rem);
  background:
    linear-gradient(to right, var(--accent), var(--highlight6));
  content: '';
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: auto;
}


@media only screen and (max-width: 768px) {
  #profile {
    padding: 12px;
  }

  p:before {
    inset: calc(12px - 0.2rem);
  }

  h2, h3, h4 {
    padding-inline: 12px;
  }

  .content {
    margin-top: 2rem;
  }
}
</style>
