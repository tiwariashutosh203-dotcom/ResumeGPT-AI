function Features() {
  const features = [
    {
      title: "AI Resume Builder",
      description: "Generate professional resumes using AI."
    },
    {
      title: "ATS Friendly",
      description: "Optimized resumes for ATS screening."
    },
    {
      title: "Multiple Templates",
      description: "Choose from modern resume templates."
    },
    {
      title: "PDF Download",
      description: "Download resumes instantly in PDF."
    },
    {
      title: "Cover Letter",
      description: "Generate cover letters with one click."
    },
    {
      title: "Interview Preparation",
      description: "Practice AI generated interview questions."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;