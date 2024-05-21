class AboutUs extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div id="team" class="our-team-area area-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="single-team-member text-center">
                <div class="team-img">
                  <a href="#">
                    <img src="../images/ea3.jpg" alt="Foto Firza" class="img-fluid" style="height: 250px; object-fit: cover;">
                  </a>
                  <div class="team-social-icon">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="https://github.com/MuhammadFirzaFernanda17">
                          <i class="bi bi-github"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/muhammad-firza-fernanda-84abb3221/">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://www.instagram.com/benarinipiers17">
                          <i class="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content">
                  <h5>Muhammad Firza Fernanda</h5>
                  <p>Project Manager</p>
                </div>
              </div>
            </div>
            <!-- End column -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="single-team-member text-center">
                <div class="team-img">
                  <a href="#">
                    <img src="../images/ea1.jpg" alt="Foto Fery" class="img-fluid" style="height: 250px; object-fit: cover;">
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
                  <h5>Muhammad Fery Syahputra</h5>
                  <p>Front-End Developer</p>
                </div>
              </div>
            </div>
            <!-- End column -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="single-team-member text-center">
                <div class="team-img">
                  <a href="#">
                    <img src="../images/ea2.jpg" alt="Foto Rizq" class="img-fluid" style="height: 250px; object-fit: cover;">
                  </a>
                  <div class="team-social-icon">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="https://github.com/Rizq-Saputra">
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
                  <h5>Muhammad Rizq Saputra</h5>
                  <p>Back-End Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    `;
  }
}

customElements.define("about-us", AboutUs);
