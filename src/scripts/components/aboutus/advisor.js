class Advisor extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
        <div class="single-team-member text-center">
          <div class="team-img">
            <a href="#">
              <img src="assets/img/team/advisor.jpg" alt="Foto Advisor" class="img-fluid" style="height: 250px; object-fit: cover;">
            </a>
            <div class="team-social-icon">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="bi bi-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="team-content">
            <h5>Nama Advisor</h5>
            <p>Advisor</p>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("team-advisor", Advisor);
  