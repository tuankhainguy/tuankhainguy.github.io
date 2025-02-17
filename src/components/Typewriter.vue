<script setup lang="ts">
</script>


<template>
  <div class="typewriterContainer">
    <div class="typewriter">
      <div class="typewriterText"></div>
    </div>
  </div>
</template>


<style scoped>
.typewriterContainer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: max-content;
  position: relative;
  padding: 12px;
	margin-top: 24px;
	margin-bottom: 24px;
}


.typewriterContainer.full {
  margin: 0;
  height: 100%;
}


.typewriter {
  display: flex;
  justify-content: start;
  align-items: center;
  width: max-content;
  max-width: 100%;
  z-index: 1;
}

.typewriter:before {
  font-size: max(1vw, 1rem);
  color: var(--catppuccin-flamingo);
  content: '$';
  margin-right: 8px;
  z-index: 1;
}


.typewriterContainer.full > .typewriter:before {
  content: '1';
  margin-right: 12px;
}


.typewriter:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: var(--catppuccin-mantle);
}

.typewriterText {
  font-size: max(1vw, 1rem);
  width: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--catppuccin-maroon); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  animation:
    typing 25s steps(20, end) infinite,
    blink-caret .75s step-end infinite;
  z-index: 1;
}

.typewriterText:after {
  content: '';
  animation:
    /* the steps are for timing with the typing */
    text 25s steps(6, end) infinite;
}


/* The typing effect */
@keyframes typing {
  0%,
  2% {
    width: 0;
  }

  6%,
  14% {
    width: 100%;
  }

  18%,
  22% {
    width: 0;
  }

  26%,
  34% {
    width: 100%
  }

  38%,
  42% {
    width: 0;
  }

  46%,
  54% {
    width: 100%
  }

  58%,
  62% {
    width: 0;
  }

  66%,
  74% {
    width: 100%
  }

  78%,
  82% {
    width: 0;
  }

  86%,
  94% {
    width: 100%
  }

  98%,
  100% {
    width: 0;
  }
}

/* I DO NOT understand why it has to be offsetted like that */
/* propably something with the steps */
@keyframes text {
  0%,
  10% {
    content: 'print("Hello world!")';
  }
  30% {
    content: 'printf("Hello world!");';
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
