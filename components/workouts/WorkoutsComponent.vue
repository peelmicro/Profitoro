<template>
  <div>
    <h2>Search for workouts, rate and select your favorite</h2>
    <div class="form-group">
      <input v-model="searchTerm" class="form-control" type="search" placeholder="Search for workouts">
    </div>
    <div class="card-columns">
      <div data-toggle="modal" data-target="#workoutModal" v-for="(workout,index) in workoutsToDisplay" :key="index" class="card" @click="onChosenWorkout(workout)">
        <img class="card-img-top img-fluid" :src="workout.pictures && workout.pictures.length && workout.pictures[0]" :alt="workout.name">
        <div class="card-block">
          <p class="card-text">{{ workout.name }}</p>
        </div>
      </div>
    </div>
    <workout-component
      :name="name"
      :description="description"
      :username="username"
      :datecreated="datecreated"
      :pictures="pictures"
      :rate="rate">
    </workout-component>    
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WorkoutComponent from '~/components/workouts/WorkoutComponent'
  import moment from 'moment'

  export default {
    data () {
      return {
        name: '',
        username: '',
        datecreated: '',
        description: '',
        pictures: [],
        rate: 0,
        searchTerm: ''
      }
    },
    computed: {
      ...mapState(['workouts']),
      workoutsToDisplay () {
        return this.workouts.filter(workout => {
          let name = workout.name.toLowerCase()
          let description = workout.description.toLowerCase()
          let username = workout.username.toLowerCase()
          let term = this.searchTerm.toLowerCase()
          return name.toLowerCase().indexOf(term) >= 0 || description.toLowerCase().indexOf(term) >= 0 || username.toLowerCase().indexOf(term) >= 0
        })
      }
    },
    components: {
      WorkoutComponent
    },
    methods: {
      onChosenWorkout (workout) {
        this.name = workout.name
        this.description = workout.description
        this.username = workout.username
        this.datecreated = moment(workout.date).format('MMM Do YY')
        this.rate = workout.rate
        this.pictures = workout.pictures
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../assets/styles/main';

  .card-columns {
    @include media-breakpoint-only(lg) {
      column-count: 3;
    }
    @include media-breakpoint-only(xl) {
      column-count: 4;
    }
    p.card-text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
