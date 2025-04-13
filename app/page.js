import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Companies from "./components/Home/Companies";
import ShapeCareer from "./components/Home/ShapeCareer";
import Success from "./components/Home/Success";
import Tutorial from "./components/Home/Tutorial";
import Weapon from "./components/Home/Weapon";
import Testimonials from "./components/Home/Testimonials";
import FAQs from "./components/Home/FAQs";
import Framework from "./components/Home/Framework";
import CTA from "./components/Home/CTA";
import styles from "./page.module.css";
import HeroSection from "./components/Home/Banner/index";
export async function generateMetadata() {
  const Pagedata = {
    heading: "Lanstitut - German Language Institute & Job Placement Services",
    description:
      "Learn German from certified C2 level trainers and secure your career in Germany. Join India's leading German language institute offering flexible batches and placement services.",
    tags: "german language, language institute, german courses, job placement, germany jobs, german classes, language learning, german certification, C2 trainers, career in germany, german language course, study in germany, work in germany, german language institute, language school, german tutoring, german lessons, german language classes, german language learning, german language certification",
    author: "Lanstitut",
    meta_data: {
      blogOptionImg: "/assets/MainImg.png",
    },
  };

  return {
    title: Pagedata.heading,
    keywords: Pagedata.tags,
    description: Pagedata.description,
    generator: "Next.js",
    applicationName: "Lanstitut",
    referrer: "origin-when-cross-origin",
    authors: [
      { name: "Lanstitut" },
      { name: Pagedata.author, url: "https://lanstitut.com" },
    ],
    publisher: "Lanstitut",
    category: "Education",

    metadataBase: new URL("https://lanstitut.com"),
    alternates: {
      canonical: "https://lanstitut.com",
    },
    robots: {
      index: true,
      follow: true,
      imageIndex: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },

    openGraph: {
      title: Pagedata.heading,
      description: Pagedata.description,
      url: "https://lanstitut.com",
      siteName: "Lanstitut",
      images: [
        {
          url: Pagedata.meta_data.blogOptionImg,
          width: 1200,
          height: 630,
          alt: "Lanstitut German Language Institute 🇩🇪",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: Pagedata.heading,
      description: Pagedata.description,
      images: [Pagedata.meta_data.blogOptionImg],
    },

    verification: {
      google: "google-site-verification-code",
      facebook: "facebook-domain-verification",
      other: {
        me: ["contact@lanstitut.com", "https://lanstitut.com"],
      },
    },
  };
}

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <HeroSection />
        </section>

        <section className={styles.section}>
          <Companies />
        </section>

        <section className={styles.section}>
          <Success />
        </section>

        <section className={styles.section}>
          <ShapeCareer />
        </section>

        <section className={styles.section}>
          <Tutorial />
        </section>

        <section className={styles.section}>
          <Weapon />
        </section>

        <section className={styles.section}>
          <Testimonials />
        </section>

        <section className={styles.section}>
          <Framework />
        </section>

        <section className={styles.section}>
          <FAQs />
        </section>

        <section className={styles.section}>
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
