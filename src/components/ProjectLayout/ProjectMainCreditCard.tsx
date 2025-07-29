import Image from 'next/image';

const ProjectMainCreditCard = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Overview & Technologies */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What is this project?</h4>
          <p className="text-gray-700 leading-relaxed">
            The <strong className="text-[#B5FCCD]">End-to-End ETL Workflow</strong> processes, stores, and analyzes massive volumes of financial data in real time. It demonstrates modern data engineering for trend detection, automated ETL, and actionable insights for fraud detection and business intelligence.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Which technologies are used?</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              ['Kafka', 'FF9800'],
              ['Spark', '00B894'],
              ['Hadoop', '607D8B'],
              ['Airflow', '1976D2'],
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
            These tools orchestrate a robust, scalable ETL pipeline from data ingestion to visualization.
          </p>
        </div>
      </div>

      {/* <hr className="border-t border-gray-300" /> */}

      {/* Section 2: Quote */}
      {/* <div className="text-center text-lg font-medium text-gray-800 italic">
        Real-time insights for smarter decisions with <span className="text-[#FF9800] font-semibold">Credit Card Transaction System</span>.
      </div> */}

      <hr className="border-t border-gray-300" />

      {/* Section 3: Pipeline Architecture */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Data Pipeline Flow</h4>
          <i className="text-gray-700 leading-relaxed">
            The pipeline processes simulated credit card transactions from ingestion to visualization
          </i>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li><strong style={{ color: '#FF9800' }}>Kafka:</strong> Ingests transaction data from CSV files into a topic at random 1-3 second intervals</li>
            <li><strong style={{ color: '#00B894' }}>Spark:</strong> Processes data in real-time with filtering, transformation, and calculations</li>
            <li><strong style={{ color: '#607D8B' }}>Hadoop:</strong> Stores processed data in HDFS for analysis</li>
            <li><strong style={{ color: '#1976D2' }}>Airflow:</strong> Orchestrates ETL with daily Power BI dataset refreshes</li>
            <li><strong style={{ color: '#F2C811' }}>Power BI:</strong> Generates interactive dashboards from Hadoop data</li>
          </ul>
        </div>
        <div className="w-full h-auto">
          <Image
            src="/creditcard/data-pipeline.png"
            alt="Data Pipeline Flow"
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Section 4: Sample Data */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">
          What does a raw transaction look like?
        </h4>
        <div className="flex justify-center">
          <Image
            src="/creditcard/raw-transaction.png" // Replace with your image path
            alt="Sample Transaction Table"
            width={800}
            height={400}
            className="rounded-lg shadow-md object-contain"
          />
        </div>
      </div>


      {/* Section 5: Visual Insights */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Visual Insights</h4>
        <p className="text-gray-700 text-center mb-4">Explore daily transaction volumes and merchant trends from the simulated data:</p>

        <div className="space-y-8">
          {/* Merchant Summary */}
          <div className="flex justify-center">
            <Image
              src="/creditcard/insight-table.png" // Replace with your image path
              alt="Sample Transaction Table"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-contain"
            />
          </div>

          {/* Visualizations Placeholder */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 mb-3 text-center">Transaction Visualizations</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Image
                  src="/creditcard/dashboard1.jpg"
                  alt="Daily Transaction Amount"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-contain"
                />
                {/* <p className="text-center text-gray-600 mt-2">Daily Transaction Amount</p> */}
              </div>
              <div>
                <Image
                  src="/creditcard/dashboard2.jpg"
                  alt="Top 10 Merchants"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-contain"
                />
                {/* <p className="text-center text-gray-600 mt-2">Top 10 Merchants</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainCreditCard;