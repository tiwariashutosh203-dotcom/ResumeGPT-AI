function Templates() {
  const templates = [
    "Modern",
    "Professional",
    "Creative",
    "Minimal",
    "Executive",
    "Classic",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Resume Templates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {templates.map((template, index) => (
            <div
              key={index}
              className="rounded-xl border p-10 hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-64 bg-gray-100 rounded-lg mb-5 flex items-center justify-center text-gray-400">
                Preview
              </div>

              <h3 className="text-2xl font-semibold">
                {template}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Templates;