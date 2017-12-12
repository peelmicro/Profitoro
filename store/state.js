const config = {
  workingPomodoro: 0.5,
  shortBreak: 0.25,
  longBreak: 0.3,
  pomodorosTillLongBreak: 2
}

const user = null
const configRef = null
const statisticsRef = null
const workoutsRef = null
const displayName = ''

const statistics = {
  pomodorosToday: 0,
  pomodorosLastWeek: 0,
  pomodorosLastMonth: 0,
  totalPomodoros: 0,
  workoutsToday: 0,
  workoutLastWeek: 0,
  workoutsLastMonth: 0,
  workoutsTotal: 0
}

export default {
  config,
  user,
  configRef,
  statisticsRef,
  workoutsRef,
  statistics,
  displayName,
  workouts: []
}
