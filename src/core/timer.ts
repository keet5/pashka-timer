export default class Timer {
  isRunning = false
  isFinished = false
  intervalProgress: number
  previousTime = null as null | Date

  constructor(public interval: number = 0) {
    this.intervalProgress = this.interval
  }

  // hms

  get hms() {
    let interval = Math.floor(this.intervalProgress / 1000)
    const h = Math.floor(interval / 3600)
    interval = interval - h * 3600
    const m = Math.floor(interval / 60)
    interval = interval - m * 60
    return [h, m, interval]
  }

  get progress(): number {
    return this.intervalProgress / this.interval
  }

  setInterval(hours: number, minutes: number, seconds: number) {
    this.interval = (hours * 3600 + minutes * 60 + seconds) * 1000
    this.intervalProgress = this.interval
  }

  reset() {
    this.intervalProgress = this.interval
  }

  stop() {
    this.isRunning = false
  }

  start() {
    this.isFinished = false
    this.isRunning = true
    this.previousTime = new Date()
    requestAnimationFrame(this.updateTimerInterval.bind(this))
  }

  getTimeDelta() {
    const currentTime: any = new Date()
    if (this.previousTime == null) return 0
    const d = currentTime - (this.previousTime as any)
    this.previousTime = currentTime
    return d
  }

  updateTimerInterval() {
    const d = this.getTimeDelta()
    this.intervalProgress -= d

    if (this.intervalProgress <= 0) {
      this.intervalProgress = 0
      this.isRunning = false
      this.isFinished = true
    }

    if (this.isRunning) {
      requestAnimationFrame(this.updateTimerInterval.bind(this))
    }
  }
}
