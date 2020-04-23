<template>
  <div class="home">
    <div class="container-fluid" id="adopt-now-section">
          <img class="img-fluid" src='../assets/img/dogs.jpg' alt="Three young dogs"/>
          <div class="card-img-overlay h-100 d-flex flex-column justify-content-end" id="adopt-now-content">
            <h1 class="display-5">This is your new family!</h1>
            <a href="#" class="btn" id="adopt-now-btn">ADOPT NOW</a>
          </div>
 
    </div>
    <div id="inset-body">
      <div class="row">
        <Volunteers class="col-sm-4" id="volunteers-card" />
        <Testimonial class="col-sm-8" id="testimonial-card" />
      </div>
      <div class="row">
        <div class="container col-sm-8" id="program-company-selection">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" id="programs-tab" data-toggle="tab" href="#programs">PROGRAMS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  id="companies-tab" data-toggle="tab" href="#companies">ASSOCIATED COMPANIES</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="programs" class="tab-pane active"><br>
              <program-tile />
            </div>
            <div id="companies" class="tab-pane fade"><br>
              <associated-company-tile />
            </div> 
          </div>
        </div>
        <div class="container col-sm-4">
          <img id="adopt-me-dog" src="../assets/img/adopt-me.jpg" alt="Dog in adopt me vest." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssociatedCompanyTile from '../components/AssociatedCompanyTile.vue'
import ProgramTile from '../components/ProgramTile.vue'
import Testimonial from '../components/Testimonial.vue'
import Volunteers from '../components/Volunteers.vue'


export default {
  name: 'home',
  components: {
    AssociatedCompanyTile,
    ProgramTile,
    Testimonial,
    Volunteers
  },
   methods: {
    showProgramTiles() {
      this.visible = !this.visible;
    }
  },
}
</script>