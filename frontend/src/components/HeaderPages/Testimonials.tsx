import Link from 'next/link';

// Static testimonials data
const testimonials = [
  { name: 'John Doe', message: 'Great service and very professional!' },
  {
    name: 'Jane Smith',
    message: 'I felt completely safe and well taken care of.',
  },
  {
    name: 'Mark Johnson',
    message: 'Highly trained team and excellent communication!',
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className="page1">
        <div className="p-16 bg-customGray text-white flex justify-around items-center">
          <h1 className="text-2xl">TESTIMONIALS</h1>
          <h2>
            <Link href="/">HOME</Link> /
            <strong className="text-yellow-600"> TESTIMONIALS</strong>
          </h2>
        </div>
      </section>
      <section className="page2 w-10/12 m-auto py-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-white  mb-6">
            Testimonials
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-customGray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="italic mb-4">{testimonial.message}</p>
                <h4 className="font-bold text-lg">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
