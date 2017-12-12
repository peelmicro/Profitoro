export default {
  setWorkingPomodoro (state, workingPomodoro) {
    state.config.workingPomodoro = workingPomodoro
  },
  setShortBreak (state, shortBreak) {
    state.config.shortBreak = shortBreak
  },
  setLongBreak (state, longBreak) {
    state.config.longBreak = longBreak
  },
  updateTotalPomodoros (state, totalPomodoros) {
    state.statistics.totalPomodoros = totalPomodoros
  },
  setUser (state, value) {
    state.user = value
  },
  setConfigRef (state, value) {
    state.configRef = value
  },
  setStatisticsRef (state, value) {
    state.statisticsRef = value
  },
  setWorkoutsRef (state, value) {
    state.workoutsRef = value
  },
  setDisplayName (state, value) {
    state.displayName = value
  }
}
