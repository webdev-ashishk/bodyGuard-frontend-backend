import Link from 'next/link';
import { InsideContact } from './InsideContact2';

const Contact = () => {
  return (
    <>
      <div className="page0">
        <div className="p-16 bg-customGray text-white flex justify-around items-center">
          <h1 className="text-2xl">CONTACT</h1>
          <h2>
            <Link href="/">HOME</Link> /
            <strong className="text-yellow-600"> CONTACT</strong>
          </h2>
        </div>
      </div>
      <div className="page1 flex">
        <div className="page2 mt-12 text-gray-700">
          <p>📍 Address: 1234 Security Lane, Suite 100, City, State, Zip</p>
          <p>📞 Phone: (123) 456-7890</p>
          <p>✉️ Email: info@yourcompany.com</p>
        </div>
        <InsideContact />
      </div>
    </>
  );
};

export default Contact;
