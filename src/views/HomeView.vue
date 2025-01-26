<template>
  <div class="relative flex items-center justify-center h-full">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>

    <!-- Particle Animation -->
    <canvas id="particles" class="absolute inset-0"></canvas>

    <!-- Main Content -->
    <div class="relative flex items-center justify-center h-full px-20 text-center">
      <div>
        <h1 class="text-6xl font-bold text-white md:text-8xl drop-shadow-lg animate-fade-in">Ben Heath</h1>
        <p class="mt-4 text-xl text-white md:text-2xl drop-shadow-md animate-slide-up">
          I'm a software engineer based out of Boston working as a fullstack engineer at Recharge, an ecommerce startup
        </p>
        <p class="mt-4 text-xl text-white md:text-2xl drop-shadow-md animate-slide-up">
          Previously I worked at MITRE building software in the public interest
        </p>
        <!-- <button
          class="px-6 py-3 mt-8 text-lg font-semibold text-white bg-purple-700 rounded-lg shadow-lg hover:bg-purple-800 animate-pulse"
        >
          Explore More
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      const canvas = document.getElementById("particles");
      const ctx = canvas.getContext("2d");
      const particles = [];
      const numParticles = 100;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.radius = Math.random() * 3 + 1;
          this.dx = Math.random() * 2 - 1;
          this.dy = Math.random() * 2 - 1;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
          ctx.fill();
        }

        update() {
          this.x += this.dx;
          this.y += this.dy;

          if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

          this.draw();
        }
      }

      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => particle.update());

        requestAnimationFrame(animate);
      }

      animate();
    },
  },
};
</script>

<style>
.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 6s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-fade-in {
  animation: fade-in 2s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 1.5s ease;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
