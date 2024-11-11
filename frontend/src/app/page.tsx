import SwiperComponent from '@/components/swipper';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="">
      {/* carousel */}
      <SwiperComponent />
      <h1>Welcome to Body Guard ....</h1>
      {/* three image */}
      <div
        id="threeCart"
        className="border-2 border-red-400 flex justify-center items-center"
      >
        <div className="scale-over old-scale max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-lg "
              src="https://cdn.create.vista.com/api/media/medium/174777752/stock-photo-security?token="
              alt="image1"
              width={400}
              height={30}
              id="image1"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="scale-over old-scale max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-lg"
              src="https://cdn.create.vista.com/api/media/medium/174777752/stock-photo-security?token="
              alt="image1"
              width={400}
              height={30}
              id="image1"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="scale-over old-scale max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-lg"
              src="https://cdn.create.vista.com/api/media/medium/174777752/stock-photo-security?token="
              alt="image1"
              width={400}
              height={30}
              id="image1"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
