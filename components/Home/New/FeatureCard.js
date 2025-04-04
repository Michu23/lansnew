class FeatureCard {
  constructor({ title, description, icon, className = "" }) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.className = className;
  }

  render() {
    return `
      <article class="d-inline-flex flex-column gap-2 p-3 bg-white rounded-3 ${styles.featureCard} ${this.className}">
        ${this.icon ? `<div>${this.icon}</div>` : ""}
        <div class="d-flex flex-column gap-2">
          <h2 class="${styles.cardTitle}">${this.title}</h2>
          <p class="${styles.cardDescription}">${this.description}</p>
        </div>
      </article>
    `;
  }
}

export default FeatureCard;
