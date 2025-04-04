class ContentSection {
  render() {
    return `
      <div class="position-absolute d-flex flex-column align-items-center gap-4 ${styles.contentSection}">
        <div class="d-flex flex-column align-items-center gap-3 w-100">
          <header class="d-flex flex-column align-items-center">
            <h1 class="text-center text-white ${styles.title}">
              Work, Grow, and Thrive
              <br />
              in Global Healthcare
            </h1>
          </header>
          <p class="text-center text-white ${styles.description}">
            The world needs healthcare professionals, and you have the skills.
          </p>
        </div>
        <button class="d-flex gap-2 justify-content-center align-items-center btn ${styles.ctaButton}">
          <span>Get Started</span>
          ${Icons.renderArrowIcon()}
        </button>
      </div>
    `;
  }
}

export default ContentSection;
