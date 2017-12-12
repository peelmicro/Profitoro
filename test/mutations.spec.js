import mutations from '~/store/mutations'
describe('mutations', () => {

  describe('setWorkingPomodoro', () => {
    it('should set the workingPomodoro property to 30', () => {
      let state = {config: {workingPomodoro: 1}}
      mutations.setWorkingPomodoro(state, 30)
      expect(state.config).toEqual({workingPomodoro: 30})
    })
  })

  describe('setShortBreak', () => {
    it('should set the setShortBreak property to 5', () => {
      let state = {config: {shortBreak: 1}}
      mutations.setShortBreak(state, 5)
      expect(state.config).toEqual({shortBreak: 5})
    })
  })

  describe('setLongBreak', () => {
    it('should set the setLongBreak property to 8', () => {
      let state = {config: {longBreak: 3}}
      mutations.setLongBreak(state, 8)
      expect(state.config).toEqual({longBreak: 8})
    })
  })
  
  describe('updateTotalPomodoros', () => {
    it('should set the updateTotalPomodoros property to 65', () => {
      let state = {statistics: {totalPomodoros: 13}}
      mutations.updateTotalPomodoros(state, 65)
      expect(state.statistics).toEqual({totalPomodoros: 65})
    })
  })

  describe('setUser', () => {
    it('should set the setUser property to Juan', () => {
      let state = {user: "Mariano"}
      mutations.setUser(state, "Juan")
      expect(state).toEqual({user: "Juan"})
    })
  })

  describe('setConfigRef', () => {
    it('should set the setConfigRef property to 34', () => {
      let state = {configRef: "ASX"}
      mutations.setConfigRef(state, "34")
      expect(state).toEqual({configRef: "34"})
    })
  })

  describe('setStatisticsRef', () => {
    it('should set the setStatisticsRef property to ABC', () => {
      let state = {statisticsRef: "KJAX"}
      mutations.setStatisticsRef(state, "ABC")
      expect(state).toEqual({statisticsRef: "ABC"})
    })
  })

  describe('setWorkoutsRef', () => {
    it('should set the setWorkoutsRef property to @LKC', () => {
      let state = {workoutsRef: "^%4"}
      mutations.setWorkoutsRef(state, "@LKC")
      expect(state).toEqual({workoutsRef: "@LKC"})
    })
  })

  describe('setDisplayName', () => {
    it('should set the setDisplayName property to Maria', () => {
      let state = {displayName: "Juli"}
      mutations.setDisplayName(state, "Maria")
      expect(state).toEqual({displayName: "Maria"})
    })
  })

})