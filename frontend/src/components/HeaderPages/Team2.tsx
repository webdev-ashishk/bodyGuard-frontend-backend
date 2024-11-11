import Image from 'next/image';

// Sample data for team members
const teamMembers = [
  {
    name: 'John Doe',
    title: 'Chief Security Officer',
    experience:
      'With over 20 years of experience in personal security and executive protection, John leads our team with a focus on strategic risk management.',
    background:
      'Military operations and extensive security training make him a trusted leader in the field.',
    imageUrl:
      'https://cdn.create.vista.com/api/media/medium/174777752/stock-photo-security?token=', // Path to John's image
  },
  {
    name: 'Jane Smith',
    title: 'Senior Protection Specialist',
    experience:
      'Jane brings 15 years of expertise in close protection and risk assessment, working with high-profile clients across industries.',
    background:
      'Her exceptional training in threat assessment and self-defense ensures client safety in all situations.',
    imageUrl:
      'https://cdn.create.vista.com/api/media/medium/174777752/stock-photo-security?token=', // Path to Jane's image
  },
  {
    name: 'Mark Johnson',
    title: 'Event Security Coordinator',
    experience:
      'Specializing in event and crowd security, Mark is known for his meticulous planning and situational awareness.',
    background:
      'He ensures every detail is managed with precision and professionalism.',
    imageUrl:
      'https://cdn.create.vista.com/api/media/medium/174777752/stock-photo-security?token=', // Path to Mark's image
  },
];

const Team2 = () => {
  return (
    <section className="team-section">
      <h2 className="text-2xl font-bold text-yellow-600">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Image
              src={member.imageUrl}
              width={600}
              height={100}
              alt="image"
              className="m-auto"
            />
            <h3>{member.name}</h3>
            <p className="title text-center">{member.title}</p>
            <p className="experience">{member.experience}</p>
            <p className="background">{member.background}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .team-section {
          padding: 2rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .team-member {
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .title {
          font-weight: bold;
          color: #333;
        }
        .experience,
        .background {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </section>
  );
};

export default Team2;
