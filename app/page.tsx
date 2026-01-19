// app/page.tsx

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
    tech: "Symphony, Next.js 13",
    points: [
      "Designed and developed RESTful APIs using Symphony to serve reporting data.",
      "Implemented authentication and authorization logic to ensure users can only read reports for their company.",
      "Built read-only API endpoints for business and company reports.",
      "Developed frontend interfaces using Next.js 13 for responsive user experiences."
    ]
  },
  {
    name: "SRA",
    tech: "Symphony, Vue.js 3",
    points: [
      "Designed and developed RESTful APIs using Symphony to serve uploading image and data.",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 lg:px-40">
      <div className="bg-white shadow-md rounded-xl p-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-8">
        <div className="flex items-center">
            {/* Avatar */}
            <img
            src="/images/avatar.jpeg"
            alt="Long Duong"
            className="w-24 h-24 rounded-full mr-6 object-cover shadow-md"
            />
            <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Long Duong</h1>
            <p className="text-gray-600 mb-1">Software Engineer</p>
            <p className="text-gray-600">Vietnam | +84 986092810 | duongminhlonge@gmail.com</p>
            <a
                href="https://www.linkedin.com/in/long-duong-5744a0157/"
                target="_blank"
                className="text-blue-600 underline mt-1"
            >
                LinkedIn Profile
            </a>
            </div>
        </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Software Engineer with 8+ years of experience in building and maintaining high-traffic e-commerce and web platforms. Strong expertise in Magento 1 & 2, along with solid hands-on experience in Laravel, Symphony for API-driven systems and Vue.js, Next.js for modern admin dashboards and front-end integrations. Highly skilled in PHP, Python, OOP, and server management. Experienced in building scalable backends, integrating third-party services, and developing custom modules for complex business requirements.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Programming Languages</h3>
              <p>PHP (Advanced), JavaScript, Python</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Backend Frameworks</h3>
              <p>Magento 1 & 2, Laravel, Symphony, FastAPI, Drupal 8, Apache Airflow</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Frontend Frameworks</h3>
              <p>Vue.js, Next.js, Blade, Twig, HTML5, CSS3</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Databases</h3>
              <p>MySQL, PostgreSQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Server & DevOps</h3>
              <p>Ubuntu, CentOS, AWS (EC2, S3), Cron Jobs</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Caching & Performance</h3>
              <p>Varnish, Redis</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Version Control & CI/CD</h3>
              <p>Git (GitHub, GitLab, Bitbucket)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Other Skills</h3>
              <p>OOP & SOLID Principles, Design Patterns, RESTful API Design, Third-party Integrations, Airflow (workflow automation)</p>
            </div>
          </div>
        </section>

        {/* Education & Certification */}
        <section className="mb-8 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Education</h2>
            <p className="text-gray-700">Bachelor of Computer Science, National Economics University (2012 – 2016) – Very Good</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Certifications</h2>
            <p className="text-gray-700">Magento 2 Adobe Certified Expert – Adobe Commerce Developer</p>
            <a href="https://www.credly.com/badges/ac0fdd6b-df37-4035-a19f-e07ce0213e8b/linked_in_profile" target="_blank" className="text-blue-600 underline">View Credential</a>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Work Experience & Projects</h2>
          {projects.map((proj, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-semibold text-gray-700">{proj.name}</h3>
              <p className="text-gray-600 mb-2"><span className="font-medium">Technology:</span> {proj.tech}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {proj.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Free Time / Interests */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Interests</h2>
          <p className="text-gray-700">
            I enjoy reading blogs and news about software architecture and e-commerce trends, continuously improving my technical skills and industry knowledge.
          </p>
        </section>

      </div>
    </main>
  )
}
