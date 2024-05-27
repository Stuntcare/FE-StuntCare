class AboutUs extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
     <section class="AboutUs">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-md-8 text-center">
              <h2 class="h2 fw-bold text-warning">Stunt Care</h2>
              <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost
                unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave
                for the far <a href="#">World of Grammar</a>.</p>
            </div>
          </div>
        </div>
      </section>    
    `;
  }
}

customElements.define("about-us", AboutUs);
