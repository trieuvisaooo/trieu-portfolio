import Image from 'next/image';

const ProjectMainBestie = () => {
  return (
    <div className="space-y-16">
      {/* Section 2: What & How */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What should I eat today?</h4>
          <p className="text-gray-700 leading-relaxed">
            A simple question that millions of people ask every day — whether for health, convenience, or curiosity.
            <br /><br />
            <strong className="text-[#B5FCCD]">BESTIE</strong> is your smart personal assistant for daily meal planning.  
            It doesn't just tell you what to eat — it learns your preferences and helps you eat better.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            How does <span className="text-[#B5FCCD]">BESTIE</span> help?
          </h4>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Recommends personalized meal plans based on your dietary goals, allergies, and taste</li>
            <li>Tracks your eating habits and health progress over time</li>
            <li>Provides a rich food database with detailed nutrition facts, cooking instructions, and more</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Section 3: Quote */}
      <div className="text-center text-lg font-medium text-gray-800 italic">
        Just set your goal — <span className="text-[#B5FCCD] font-semibold">BESTIE</span> handles the rest.
      </div>

      <hr className="border-t border-gray-300" />

      {/* Section 4: Technical Overview */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">What's under the hood?</h4>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Hybrid database with <strong>PostgreSQL</strong> & <strong>MongoDB</strong> for scalability</li>
            <li>Uses a multi-stage recommendation system that integrates various algorithms (e.g. CF, CBF, popularity-based, MMR Re-ranking) to generate optimized and diverse meal combinations</li>
            <li>Automated data validation and standardization pipelines</li>
            <li>Cloud-native microservices architecture using Docker & Kubernetes</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              ['Python', '3776AB'],
              ['Java', '007396'],
              ['Flutter', '02569B'],
              ['Docker', '2496ED'],
              ['PostgreSQL', '4169E1'],
              ['MongoDB', '47A248'],
            ].map(([tech, color]) => (
              <span
                key={tech}
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white`}
                style={{ backgroundColor: `#${color}` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Database content */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">What's inside the database?</h4>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>
              <strong>Dishes:</strong>  
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Over <strong>4,000+ Vietnamese dishes</strong></li>
                <li>Wide coverage: main courses, sides, desserts, snacks, beverages</li>
                <li>Sources: Reputable Vietnamese food websites such as <i>Cooky.vn</i>, <i>MonNgonMoiNgay.com</i> and more</li>
              </ul>
            </li>
            <li>
              <strong>Ingredients:</strong>  
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Rich nutritional data: calories, macros, vitamins, minerals</li>
                <li>Supports multiple measurement units (g, ml, pieces, cups...)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

            {/* SECTION: ETL PROCESS */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image of ETL pipeline */}
        <div className="w-full h-auto">
          <Image
            src="/bestie/data-pipeline.png"
            alt="ETL pipeline"
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto object-contain"
          />
        </div>
        {/* Description */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">ETL Workflow</h4>
          <i className="text-gray-700 leading-relaxed space-y-2">
            BESTIE uses an automated ETL pipeline to ingest and process food-related data:
          </i>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Extracts structured and unstructured food data from public APIs and custom crawlers</li>
            <li>Transforms raw entries with cleaning, normalization, and enrichment via DuckDuckGo, Gemini API</li>
            <li>Supports incremental updates and data deduplication</li>
          </ul>
        </div>
      </div>

        {/* SECTION: SCREENSHOT GALLERY */}
        <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Application Snapshots</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['screen1.png', 'screen2.png', 'screen3.png', 'screen4.png', 'screen5.png', 'screen6.png'].map((img, i) => (
            <div
                key={i}
                className="flex items-center justify-center rounded-lg  transition-shadow p-4"
            >
                <Image
                src={`/bestie/screenshots/${img}`}
                alt={`Screenshot ${i + 1}`}
                width={200}
                height={150}
                className="object-contain rounded-md"
                />
            </div>
            ))}
        </div>
        </div>


      {/* SECTION: VIDEO INTRO */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Feature Walkthrough</h4>
        <div className="aspect-video w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/SGZ0FjQfMSY"
            title="BESTIE Feature Walkthrough"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

    </div>
  );
};

export default ProjectMainBestie;
