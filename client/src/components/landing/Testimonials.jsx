function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      review: "Best AI Resume Builder I've ever used."
    },
    {
      name: "Priya",
      review: "Got interview calls after using ResumeGPT AI."
    },
    {
      name: "Aman",
      review: "Simple, Fast and Professional."
    }
  ];

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow"
            >
              <p>"{item.review}"</p>

              <h3 className="mt-5 font-bold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;