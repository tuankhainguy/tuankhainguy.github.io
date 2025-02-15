<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
});
</script>


<template>
  <div class="section">
    <h1>SOFTWARE ENGINEERING IS FUN</h1>
    <div class="typewriter-container">
      <div class="typewriter">
      </div>
    </div>
    <h2>Really fun</h2>
  </div>
</template>


<style scoped>
.section {
  font-weight: 300;
  flex-direction: column;
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  justify-content: space-between;
}

* {
  font-weight: inherit;
}

h1 {
  width: 100%;
  margin-top: 5rem;
  font-size: max(4vw, 3rem);
}

h2 {
  width: 100%;
  margin-top: 5rem;
  font-size: max(2.5vw, 2rem);
}

.typewriter-container {
  width: max-content;
}

.typewriter {
  font-size: max(2vw, 1.5rem);
  width: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--catppuccin-maroon); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  animation:
    typing 15s steps(24, end) infinite,
    blink-caret .75s step-end infinite;
}

.typewriter:after {
  content: '';
  animation:
    /* the steps are for timing with the typing */
    text 15s steps(6, end) infinite;
}

/* The typing effect */
@keyframes typing {
  0% {
    width: 0;
  }

  6%,
  14% { width: 100% }

  20% {
    width: 0;
  }

  26%,
  34% { width: 100% }

  40% {
    width: 0;
  }

  46%,
  54% { width: 100% }

  60% {
    width: 0;
  }

  66%,
  74% { width: 100% }

  80% {
    width: 0;
  }

  86%,
  94% { width: 100% }

  100% { width: 0 }
}

/* I DO NOT understand why it has to be offsetted like that */
/* propably something with the steps */
@keyframes text {
  0%,
  10% {
    content: 'print("Hello world!")';
  }
  30% {
    content: 'println("Hello world!")';
  }
  50% {
    content: 'console.log("Hello world!")';
  }
  70% {
    content: 'System.out.println("Hello world!")';
  }
  90%,
  100% {
    content: 'fmt.Println("Hello world!")';
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--catppuccin-maroon) }
}

</style>
