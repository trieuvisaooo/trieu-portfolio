import Image from 'next/image';

const ProjectMainAQI = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Overview & Technologies */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What is this project about?</h4>
          <p className="text-gray-700 leading-relaxed">
            The <strong className="text-[#7AC6D2]">US AQI Analysis</strong> project focuses on collecting, processing, and analyzing Air Quality Index (AQI) data across 10 US states.  
            The goal is to provide actionable insights into air quality trends, pollutant sources, and regional differences, supporting both public awareness and policy-making.
          </p>
        </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Which technologies are used?</h3>

      <div className="mt-4 flex flex-wrap gap-2 mb-4">
        {[
            ['SSIS', 'A91D22'],       
            ['SSAS', '1F497D'],       
            ['Python', '3776AB'],     
            ['SQL Server', 'CC2927'], 
            ['Power BI', 'F2C811'], 
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

      <p className="text-gray-700 leading-relaxed">
        These technologies form a complete BI solution — from raw CSV ingestion (SSIS, Python) to
        multidimensional modeling (SSAS), centralized storage (SQL Server), and insights delivery
        through interactive Power BI dashboards.
      </p>
    </div>



      </div>

      <hr className="border-t border-gray-300" />

      {/* Section 2: Quote */}
      <div className="text-center text-lg font-medium text-gray-800 italic">
        Uncover air quality trends with <span className="text-[#7AC6D2] font-semibold">US AQI Analysis</span> — empowering awareness and action.
      </div>

      <hr className="border-t border-gray-300" />

      {/* Section 3: Database Description */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">How is the data organized?</h4>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <i>Data Warehouse</i>
            <li>Centralized storage for AQI data from EPA sources</li>
            <li>Star schema with fact tables for daily AQI readings and dimension tables for states, cities, pollutants, time, and AQI category (e.g., Good, Moderate)</li>
            <li>Supports OLAP cubes for fast, multidimensional analysis</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Data Volume</h4>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Hundreds of thousands of records over multiple years</li>
            <li>Includes pollutant breakdowns (PM2.5, PM10, O₃, NO₂, SO₂, CO)</li>
          </ul>
        </div>
      </div>

      {/* Section 4: ETL Pipeline */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">ETL Pipeline Flow</h4>
          <i className="text-gray-700 leading-relaxed">
            The ETL pipeline for AQI data is simple and robust, moving data through four key stages:
          </i>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li><strong style={{ color: '#0600ab' }}>Source:</strong> Collect raw AQI data from CSV files</li>
            <li><strong style={{ color: '#00B894' }}>Stage:</strong> Store data in SQL Server with minimal transformation (basic checks and metadata tagging)</li>
            <li><strong style={{ color: '#FDCB6E' }}>NDS:</strong> Clean, validate, and standardize raw data entries with detailed transformations</li>
            <li><strong style={{ color: '#E17055' }}>DDS:</strong> Transform data into star-schema model for analytics and dashboard reporting</li>
            <li><strong style={{ color: '#6C5CE7' }}>OLAP:</strong> Enable multidimensional analysis to monitor air quality trends across locations and time</li>
            <li><strong style={{ color: '#0984E3' }}>Forecast:</strong> Apply time series models to predict future AQI levels and detect abnormal patterns proactively</li>
          </ul>
        </div>
        <div className="w-full h-auto">
          <Image
            src="/aqi/etl-pipeline.png"
            alt="ETL Pipeline Flow"
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Section 5: Visual Insights */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Visual Insights</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: '/aqi/dashboard1.jpg', alt: 'Max & Min AQI per State per Quarter' },
            { src: '/aqi/dashboard2.jpg', alt: 'Mean & Std Dev of AQI by State per Quarter' },
            { src: '/aqi/dashboard3.jpg', alt: 'Days & Average AQI at Very Unhealthy or Worse' },
            { src: '/aqi/dashboard4.jpg', alt: 'Days per AQI Category in HI, AK, IL, DE' },
            { src: '/aqi/dashboard5.jpg', alt: 'Quarterly Mean AQI in HI, AK, IL, DE' },
            { src: '/aqi/dashboard6.jpg', alt: 'Regional AQI Heatmap' },
          ].map((img, i) => (
            <div key={i} className="flex items-center justify-center rounded-lg transition-shadow p-4">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={225}
                className="object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMainAQI;