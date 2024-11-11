import Link from 'next/link';

export default function HeaderMenuItems() {
  return (
    <div>
      <ul id="menuItems" className="flex gap-6 p-4">
        <li>
          <Link href="/" className="focus:text-yellow-600 focus:font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="focus:text-yellow-600 focus:font-bold">
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="focus:text-yellow-600 focus:font-bold"
          >
            Services
          </Link>
        </li>
        <li>
          <Link href="/team" className="focus:text-yellow-600 focus:font-bold">
            Team
          </Link>
        </li>
        <li>
          <Link
            href="/testimonials"
            className="focus:text-yellow-600 focus:font-bold"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="/careers"
            className="focus:text-yellow-600 focus:font-bold"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="focus:text-yellow-600 focus:font-bold"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
