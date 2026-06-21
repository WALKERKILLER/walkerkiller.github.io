<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showAd = computed(() => !route.path.startsWith('/about'))

const BIRTH = new Date('2005-12-02T00:00:00+08:00')
const now = ref(new Date())
const canvasRef = ref<HTMLCanvasElement>()

let ageTimer = 0
let animId = 0

onMounted(() => {
  ageTimer = window.setInterval(() => { now.value = new Date() }, 1000)

  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const parent = canvas.parentElement!
  const w = parent.clientWidth
  const h = parent.clientHeight || 220
  canvas.width = w * 2
  canvas.height = h * 2
  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`
  ctx.scale(2, 2)

  const dots = Array.from({ length: 20 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -Math.random() * 0.2 - 0.05,
    size: Math.random() * 2 + 1,
    alpha: Math.random() * 0.4 + 0.15,
    alphaDir: Math.random() > 0.5 ? 1 : -1,
  }))

  function draw() {
    ctx!.clearRect(0, 0, w, h)

    for (const d of dots) {
      d.x += d.vx
      d.y += d.vy
      d.alpha += 0.004 * d.alphaDir
      if (d.alpha > 0.6) d.alphaDir = -1
      if (d.alpha < 0.08) d.alphaDir = 1
      if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w }
      if (d.x < -10 || d.x > w + 10) d.x = Math.random() * w

      ctx!.beginPath()
      ctx!.arc(d.x, d.y, d.size, 0, Math.PI * 2)
      ctx!.fillStyle = `rgba(130, 170, 255, ${d.alpha})`
      ctx!.fill()
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x
        const dy = dots[i].y - dots[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 50) {
          ctx!.beginPath()
          ctx!.moveTo(dots[i].x, dots[i].y)
          ctx!.lineTo(dots[j].x, dots[j].y)
          ctx!.strokeStyle = `rgba(130, 170, 255, ${0.1 * (1 - dist / 50)})`
          ctx!.lineWidth = 0.5
          ctx!.stroke()
        }
      }
    }

    animId = requestAnimationFrame(draw)
  }

  draw()
})

onUnmounted(() => {
  clearInterval(ageTimer)
  cancelAnimationFrame(animId)
})

const age = computed(() => {
  let ms = now.value.getTime() - BIRTH.getTime()
  if (ms < 0) return '还没出生呢～'
  ms = Math.abs(ms)

  const seconds = Math.floor(ms / 1000) % 60
  const minutes = Math.floor(ms / (1000 * 60)) % 60
  const hours = Math.floor(ms / (1000 * 60 * 60)) % 24
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) % 30.44
  const months = Math.floor(ms / (1000 * 60 * 60 * 24) / 30.44) % 12
  const years = Math.floor(ms / (1000 * 60 * 60 * 24) / 365.25)

  return `${years}年${months}月${Math.floor(days)}天${String(hours).padStart(2, '0')}时${String(minutes).padStart(2, '0')}分${String(seconds).padStart(2, '0')}秒`
})
</script>

<template>
  <YunCard v-if="showAd" class="yun-age-card" p="4">
    <canvas ref="canvasRef" class="bg-canvas" />
    <div class="content">
      <div class="ad-header">
        <span class="i-ri-advertisement-line ad-icon" />
        <span class="ad-text">广告位招租</span>
      </div>
      <div class="age-label">我已经活了</div>
      <div class="age-counter">{{ age }}</div>
    </div>
  </YunCard>
</template>

<style scoped>
.yun-age-card {
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.ad-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 14px;
}

.ad-icon {
  font-size: 1.4rem;
  opacity: 0.5;
}

.ad-text {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  opacity: 0.55;
}

.age-label {
  font-size: 0.8rem;
  opacity: 0.6;
  margin-bottom: 6px;
}

.age-counter {
  font-size: 0.9rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, var(--va-c-primary), #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
}
</style>
