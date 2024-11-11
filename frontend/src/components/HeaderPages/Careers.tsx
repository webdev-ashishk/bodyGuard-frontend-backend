import Link from 'next/link';

const Careers = () => {
  return (
    <div>
      <div className="page1 p-16 bg-customGray text-white flex justify-around items-center">
        <h1 className="text-2xl">CAREERS</h1>
        <h2>
          <Link href="/">HOME</Link> /
          <strong className="text-yellow-600"> CAREERS</strong>
        </h2>
      </div>
      <div className="page2 w-8/12 m-auto p-16">
        <h1 className="text-2xl font-bold text-yellow-600">
          Careers At [YOUR COMPANY NAME]
        </h1>
        <p className="p-2 m-2">
          Are you looking to join a team of dedicated, highly trained
          professionals committed to excellence in security and personal
          protection? At [Your Company Name], we are always seeking skilled and
          motivated individuals to join our ranks. If you are passionate about
          safety, highly disciplined, and ready to make a difference, we had
          love to hear from you.
        </p>
        <h2 className="font-bold text-yellow-600">Why Work With Us ?</h2>
        <ul className="p-2 m-2">
          <li>
            Industry-Leading Training: We provide rigorous, ongoing training to
            ensure our team members are equipped with the latest skills in
            security and threat management.
          </li>
          <li>
            Growth Opportunities: We value our employees and invest in their
            growth, offering clear career advancement paths within the company.
          </li>
          <li>
            Diverse Clientele: Work with high-profile clients, corporate
            executives, and individuals in need of specialized security
            services.
          </li>
          <li>
            Team Environment: Join a team that values collaboration, discipline,
            and mutual support.
          </li>
        </ul>
        <h2 className="font-bold text-yellow-600">Open Positions</h2>
        <ul className="p-2 m-2">
          <li>
            Personal Security Officer (PSO): Protect individuals in various
            settings, ensuring their safety and security at all times.
          </li>
          <li>
            Event Security Specialist: Manage security at events, including
            crowd control, risk assessment, and on-site protection.
          </li>
          <li>
            Executive Driver: Provide secure and discreet transportation for
            high-profile clients.
          </li>
        </ul>
        <h2 className="font-bold text-yellow-600">Requirements</h2>
        <ul className="m-2 p-2">
          <li>
            Prior experience in security or law enforcement (preferred but not
            required)
          </li>
          <li>
            Excellent communication skills and the ability to remain calm under
            pressure
          </li>
          <li>Strong physical fitness and situational awareness</li>
          <li>
            Certifications in security, self-defense, or first aid (a plus)
          </li>
        </ul>
        <h2 className="font-bold text-yellow-600">How to Apply</h2>
        <p className="p-2 m-2">
          Ready to take the next step? Submit your resume and cover letter to
          [email@example.com] with the subject line “Career Application ,
          [Position Name].” We will be in touch if your skills and experience
          are a match. Join us in creating safer spaces for our clients and
          communities. At [Your Company Name], we do not just offer jobs; we
          offer careers built on purpose, commitment, and excellence.
        </p>
      </div>
    </div>
  );
};
export default Careers;
