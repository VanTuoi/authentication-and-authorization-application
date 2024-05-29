<template>
  <main class="main-content mt-0">
    <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
          <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div class="card z-index-0 border-radius-lg">
              <div class="card-header text-center pt-4">
                <h5>Snake Game</h5>
              </div>
              <div class="card-body">
                <div id="gameContainer" class="text-center">
                  <canvas id="gameCanvas" width="350" height="400" class="rounded"></canvas>
                  <div class="mt-4">
                    <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2" @click="startGame">Start
                      Game</argon-button>
                  </div>
                  <p class="text-sm mt-3 mb-0">
                    Use arrow keys to control the snake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import ArgonButton from '@/components/ArgonButton.vue';

const body = document.getElementsByTagName('body')[0];
const store = useStore();

onBeforeMount(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove('bg-gray-100');
});

onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add('bg-gray-100');
});

const startGame = () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scale = 10;
  let snake;
  let food;
  let speed = 100;
  let direction = 'RIGHT';

  class Snake {
    constructor() {
      this.body = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
      ];
    }

    draw() {
      ctx.fillStyle = '#00FF00';
      this.body.forEach(segment => {
        ctx.fillRect(segment.x * scale, segment.y * scale, scale, scale);
      });
    }

    update() {
      const head = { ...this.body[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      this.body.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        placeFood();
      } else {
        this.body.pop();
      }

      if (this.isCollision()) {
        alert('Game Over');
        clearInterval(game);
        startGame();
      }
    }

    isCollision() {
      const head = this.body[0];
      return this.body.slice(1).some(segment => segment.x === head.x && segment.y === head.y) ||
        head.x < 0 || head.x >= canvas.width / scale || head.y < 0 || head.y >= canvas.height / scale;
    }
  }

  const placeFood = () => {
    food = {
      x: Math.floor(Math.random() * canvas.width / scale),
      y: Math.floor(Math.random() * canvas.height / scale)
    };
  };

  const drawFood = () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(food.x * scale, food.y * scale, scale, scale);
  };

  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
    drawFood();
  };

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') direction = 'UP';
        break;
      case 'ArrowDown':
        if (direction !== 'UP') direction = 'DOWN';
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') direction = 'LEFT';
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') direction = 'RIGHT';
        break;
    }
  });

  snake = new Snake();
  placeFood();

  const game = setInterval(update, speed);
};
</script>

<style>
body {
  background-color: #f8f9fa;
}

#gameCanvas {
  background-color: #000;
  border: 1px solid #000;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
