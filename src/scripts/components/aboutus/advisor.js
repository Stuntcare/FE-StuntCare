/* eslint-disable no-undef */
class Advisor extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <div class="card" data-aos="fade-down" style="width: 18rem; margin: 30px auto;">
          <img data-src="../images/advisor.jpg" class="card-img-top lazyload" alt="Advisor" style="width: 150px height: 150px" crossorigin="anonymous" >
          <div class="card-body text-center">
              <h5 class="card-title text-uppercase fw-bold">Agrey Tosira</h5>
              <p class="card-text text-capitalize">Front-End Advisor</p>
              <div class="d-flex justify-content-center ">
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
              </div>
          </div>
        </div>
      `;
  }
}

customElements.define('team-advisor', Advisor);
