class HeroSection {
  constructor(container) {
    this.container = container;
    this.backgroundElements = new BackgroundElements();
    this.contentSection = new ContentSection();
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <section class="position-relative overflow-hidden rounded-5 ${styles.heroSection}">
        ${this.backgroundElements.render()}
        ${this.contentSection.render()}

        ${new FeatureCard({
          className: "position-absolute start-130 top-441",
          title: "Global Job Opportunities",
          description: "Access jobs in top healthcare destinations.",
        }).render()}

        ${new FeatureCard({
          className: "position-absolute start-872 top-516",
          title: "Language & Certification Support",
          description: "Meet employer & visa language requirements.",
          icon: Icons.renderLanguageIcon(),
        }).render()}

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cd5a1ca556c29344cb9c56f96d0c24c206d566"
          alt="Healthcare professional"
          class="position-absolute ${styles.doctorImage}"
        />
      </section>
    `;
  }
}

export default HeroSection;
