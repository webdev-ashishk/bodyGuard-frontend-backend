'use client';
import { useState } from 'react';
export const InsideContact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    text: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      setStatus(result.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(JSON.stringify(formData));
  return (
    <div className="p-4 mx-auto max-w-xl bg-gray-700 font-[sans-serif] mt-2">
      <h1 className="text-3xl font-extrabold text-center">Contact us</h1>
      <form className="mt-8 space-y-4" onSubmit={handleSubmitFormData}>
        <input
          type="email"
          name="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 text-yellow-400 bg-transparent text-sm outline-blue-500 border-2"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 text-yellow-400 bg-transparent text-sm outline-blue-500 border-2"
        />
        <textarea
          placeholder="Message"
          name="text"
          value={formData.text}
          onChange={handleChange}
          className="w-full rounded-md px-4 text-yello-400 bg-transparent text-sm pt-3 outline-blue-500 border-2"
        ></textarea>
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
        {'send email status is===> ' + status}
      </form>
    </div>
  );
};
