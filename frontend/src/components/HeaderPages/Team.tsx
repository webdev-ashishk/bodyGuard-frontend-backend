'use client';
import Link from 'next/link';
import Team2 from './Team2';

const Team = () => {
  return (
    <div className="caret-white">
      <div className="page1 p-16 bg-customGray text-white flex justify-around items-center">
        <h1 className="text-2xl">TEAM</h1>
        <h2>
          <Link href="/" className="cursor-pointer">
            HOME
          </Link>{' '}
          /<strong className="text-yellow-600">TEAM</strong>
        </h2>
      </div>
      <div className="page2 w-10/12 m-auto">
        <Team2 />
      </div>
    </div>
  );
};
export default Team;
