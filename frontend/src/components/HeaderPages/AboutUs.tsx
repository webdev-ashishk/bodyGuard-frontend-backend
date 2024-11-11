import Link from 'next/link';

const AboutUs = () => {
  return (
    <div>
      <div
        id="page1"
        className="p-16 bg-customGray text-white flex justify-around items-center"
      >
        <h1 className="text-2xl">ABOUT US</h1>
        <h2>
          <Link href="/">HOME</Link> /
          <strong className="text-yellow-600"> ABOUT US</strong>
        </h2>
      </div>
      <div id="page2" className="w-10/12 page-two m-auto p-16">
        <h1 id="heading1" className="md:text-center md:text-2xl">
          We are the leader of the security and bodyguard services industry.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <div
          id="totalThreeCard"
          className="flex justify-center flex-wrap gap-10 p-5 m-5"
        >
          <div
            id="cart1"
            className="bg-customGray border-2 rounded-lg min-w-[320px] max-w-[330px] p-2"
          >
            <h1 className="text-2xl">Our Vison</h1>
            <p>
              To be the top ten niec company in the world. luctus nec
              ullamcorper mattis this text. Lorem ipsum dolor sit amet, now or
              tomorrow consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo
            </p>
          </div>
          <div
            id="cart2"
            className="bg-customGray border-2 rounded-lg min-w-[320px] max-w-[330px] p-2"
          >
            <h1 className="text-2xl">Our Mission</h1>
            <p>
              To protect the wold from the aleans I am dolor sit amet,
              consectetur adipiscing elit change this text. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.{' '}
            </p>
          </div>
          <div
            id="cart3"
            className="bg-customGray border-2 rounded-lg min-w-[320px] max-w-[330px] p-2"
          >
            <h1 className="text-2xl">Our Goals</h1>
            <p>
              Everything we do is inspired by our mission, values, and vision.
              so developing strategic objectives. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        {/* get in touch button  */}
        <div className="get-in-touch bg-customGray flex justify-between items-center p-5">
          <p>Hey! Just relax we are here to protect you !</p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link href="/contact">Get in Touch</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
