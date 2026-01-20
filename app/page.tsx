"use client";

import { useState } from "react";

const projects = [
  {
    name: "Wallartprints",
    tech: "Magento EE 2.2",
    points: [
      "Developed a system to synchronize images from Adobe Stock and automatically create products in Magento.",
      "Built custom pricing logic based on image size and material.",
      "Used Cloudinary for dynamic image optimization across multiple formats.",
      "Automated license registration and image downloads from Adobe Stock.",
      "Developed cron jobs and background processes for product popularity updates.",
      "Deployed and optimized infrastructure on AWS using Capistrano."
    ]
  },
  {
    name: "Hachijapan",
    tech: "Magento CE 2.1",
    points: [
      "Set up and customized Magento theme based on customer requirements.",
      "Developed a custom self-delete customer account extension allowing users to permanently remove their accounts.",
      "Migrated product data and customer records from legacy systems into Magento."
    ]
  },
  {
    name: "TriaBeauty",
    tech: "Magento EE 2.1",
    points: [
      "Integrated third-party services such as Bazaarvoice, PCA Predict, and Social Login.",
      "Developed and configured custom product attributes, attribute sets, and backend logic.",
      "Performed large-scale product data migration, ensuring data accuracy, performance, and compatibility with Magento EE.",
      "Customized Magento theme extensively based on customer requirements."
    ]
  },
  {
    name: "Aeonibs",
    tech: "Magento CE 2.2",
    points: [
      "Customized Magento UI Components for cart price rule management in the admin panel.",
      "Developed advanced promotion and discount logic for cart price rules.",
      "Customized Magento frontend theme according to customer requirements.",
      "Improved UI/UX for promotion visibility."
    ]
  },
  {
    name: "NHRA",
    tech: "Drupal 8",
    points: [
      "Developed custom content types and views to support business workflows.",
      "Built and customized frontend layouts and components.",
      "Collaborated with stakeholders to translate requirements into functional frontend features."
    ]
  },
  {
    name: "CDS – Central",
    tech: "Magento 2.2 CE (Backend)",
    points: [
      "Developed logic to restrict payment methods at checkout based on product attributes."
    ]
  },
  {
    name: "SuperSports – Central",
    tech: "Magento 2.3 CE",
    points: [
      "Implemented order synchronization from multiple channels including Shopee, Lazada, Prestashop, and Mirakl.",
      "Led replatforming from legacy systems (CS-Cart) to Magento 2, including data mapping, migration strategy, and validation.",
      "Migrated orders, CMS blocks, CMS pages, and related content from the old backend system to Magento 2.",
      "Ensured data integrity, performance optimization, and business continuity."
    ]
  },
  {
    name: "MSIS",
    tech: "Symfony, Next.js 13",
    points: [
      "Designed and developed RESTful APIs using Symfony to serve reporting data.",
      "Implemented authentication and authorization logic to ensure users can only read reports for their company.",
      "Built read-only API endpoints for business and company reports.",
      "Developed frontend interfaces using Next.js 13 for responsive user experiences."
    ]
  },
  {
    name: "SRA",
    tech: "Symfony, Vue.js 3",
    points: [
      "Designed and developed RESTful APIs using Symfony to serve uploading image and data.",
      "Implemented authentication and authorization logic to ensure users can only read reports for each projects.",
      "Built read-only API endpoints for project and company reports.",
      "Developed frontend interfaces using Vue.js 3 for responsive user experiences."
    ]
  },
  {
    name: "Lotus",
    tech: "Apache Airflow",
    points: [
      "Developed Airflow DAGs to extract data from Oracle and MySQL databases.",
      "Implemented data comparison logic to detect mismatches or missing records.",
      "Built automated reporting sent via email to admins.",
      "Scheduled and monitored workflows to ensure reliability."
    ]
  },
  {
    name: "DailyNews",
    tech: "Laravel, Filament Admin, Vue.js",
    points: [
      "Developed a news publishing platform with admin panel and frontend visitor interface.",
      "Implemented CRUD functionality for news, categories, and tags.",
      "Integrated user authentication and role-based access control.",
      "Optimized workflow for scheduled content publishing.",
      "Designed RESTful APIs for frontend consumption and real-time updates."
    ]
  }
];

const skills = {
  Languages: ["PHP", "JavaScript", "Python"],
  Backend: ["Magento 1/2", "Laravel", "Symfony", "FastAPI", "Drupal 8", "Airflow"],
  Frontend: ["Vue.js", "Next.js", "Blade", "Twig", "HTML", "CSS"],
  DevOps: ["AWS", "Ubuntu", "CentOS", "Cron Jobs"],
  Database: ["MySQL", "PostgreSQL"],
  Other: ["REST APIs", "OOP & SOLID", "Design Patterns"]
};

export default function Home() {
  const [tab, setTab] = useState<"summary" | "skills" | "projects">("summary");

  return (
    <main className="min-h-screen bg-gray-100 py-14 px-4 md:px-24">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-12">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="/images/avatar.jpeg"
            alt="Long Duong"
            className="w-28 h-28 rounded-full object-cover ring-2 ring-gray-200"
          />

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">
              Long Duong
            </h1>
            <p className="text-gray-700 font-medium mt-1">
              Software Engineer
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Vietnam · +84 986092810 · duongminhlonge@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/in/long-duong-5744a0157/"
              target="_blank"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-gray-900 hover:underline"
            >
              LinkedIn Profile →
            </a>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="bg-gray-200 rounded-full p-1 flex gap-1">
            {[
              { id: "summary", label: "Summary" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Experience" }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    tab === t.id
                      ? "bg-white shadow text-gray-900"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <section>

          {/* Summary */}
          {tab === "summary" && (
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Software Engineer with <strong>8+ years</strong> of experience building
                website application.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Bachelor’s degree in <strong>Computer Science</strong>, with strong
                expertise in Magento 1 & 2, Laravel, Symfony, and modern frontend
                frameworks like Vue.js and Next.js.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Focused on building maintainable, scalable backend systems and delivering
                clean, reliable solutions for complex business requirements.
              </p>
            </div>
          )}

          {/* Skills */}
          {tab === "skills" && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wide">
                    {group}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1 text-sm rounded-full
                          bg-gray-900 text-white
                          border border-gray-800
                          hover:bg-gray-800
                          transition
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {tab === "projects" && (
            <div className="space-y-6">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="relative border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gray-900 rounded-full" />

                  <div className="pl-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {proj.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {proj.tech}
                      </span>
                    </div>

                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {proj.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t text-center text-sm text-gray-500">
          Interested in scalable backend systems, e-commerce architecture,
          and clean code practices.
        </footer>

      </div>
    </main>
  );
}
