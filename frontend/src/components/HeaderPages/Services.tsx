// pages/services.js

import Link from 'next/link';

// Static services data
const services = [
  {
    title: 'Personal Protection',
    description:
      'Our personal protection services provide clients with dedicated bodyguards to ensure their safety in any environment.',
    icon: '🛡️', // You can replace this with an icon image URL if you prefer
  },
  {
    title: 'Event Security',
    description:
      'Our event security team is trained in crowd management and risk assessment to keep events safe and secure.',
    icon: '🎉',
  },
  {
    title: 'Executive Protection',
    description:
      'High-profile clients can rely on our discreet executive protection for seamless, secure travel and daily activities.',
    icon: '🚘',
  },
  {
    title: 'Risk Assessment',
    description:
      'We assess potential threats and vulnerabilities to provide tailored security solutions for individuals and businesses.',
    icon: '🔍',
  },
];

const Services = () => {
  return (
    <>
      <section className="page1">
        <div className="p-16 bg-customGray text-white flex justify-around items-center">
          <h1 className="text-2xl">SERVICES</h1>
          <h2>
            <Link href="/">HOME</Link> /
            <strong className="text-yellow-600"> SERVICES</strong>
          </h2>
        </div>
      </section>
      <section className="page2  py-12 w-10/12 m-auto">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-semibold text-center text-white mb-10">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bg-customGray text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
