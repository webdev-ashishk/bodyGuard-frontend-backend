'use client';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const InsideContact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      console.log(form.current);
      const SERVICES_ID = 'service_j87htto';
      const TEMPLATE_ID = 'template_w9t2hyg';
      const PUBLIC_KEY = 'Fog8SChnZQShPqkDl';
      emailjs
        .sendForm(SERVICES_ID!, TEMPLATE_ID!, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="p-4 mx-auto max-w-xl bg-gray-700 font-[sans-serif]">
      <h1 className="text-3xl font-extrabold text-center">Contact us</h1>
      <form className="mt-8 space-y-4" onSubmit={sendEmail} ref={form}>
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 text-yellow-400  focus:bg-transparent text-sm outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 text-yellow-400 focus:bg-transparent text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 text-yellow-400 focus:bg-transparent text-sm outline-blue-500"
        />
        <textarea
          placeholder="Message"
          className="w-full rounded-md px-4 text-yello-400 focus:bg-transparent text-sm pt-3 outline-blue-500"
        ></textarea>
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          value="send"
        >
          Send
        </button>
      </form>
    </div>
  );
};
