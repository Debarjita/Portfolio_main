"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative"
    >
      {/* Background gradient */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl z-10 relative">
        {/* Big heading like About Me */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Let&apos;s Connect</h2>
          <p className="text-xl lg:text-2xl text-[#ADB7BE] mb-8 leading-relaxed max-w-3xl mx-auto">
            I&apos;m actively seeking Software Engineer / SDE opportunities, where I can leverage my technical expertise 
            and leadership experience to build impactful, scalable solutions. Whether you have a question, want to 
            discuss opportunities, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">Email</p>
                    <p className="text-[#ADB7BE]">debar.bhatt10@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">Location</p>
                    <p className="text-[#ADB7BE]">Vellore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Link 
                  href="https://github.com/Debarjita"
                  className="w-12 h-12 bg-[#181818] border border-[#33353F] rounded-lg flex items-center justify-center hover:border-purple-500/50 transition-colors"
                >
                  <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
                </Link>
                <Link 
                  href="http://www.linkedin.com/in/debarjitabhattacharjee"
                  className="w-12 h-12 bg-[#181818] border border-[#33353F] rounded-lg flex items-center justify-center hover:border-purple-500/50 transition-colors"
                >
                  <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-[#181818] border border-[#33353F] rounded-xl p-8">
            {emailSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-green-500 text-lg">
                  Thank you for reaching out. I&aposll get back to you soon!
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="text-white block mb-3 text-lg font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-lg rounded-lg block w-full p-4 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-white block text-lg mb-3 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-lg rounded-lg block w-full p-4 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="What&apos;s this about?"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-white block text-lg mb-3 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    required
                    className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-lg rounded-lg block w-full p-4 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg w-full text-lg transition-all duration-300 transform hover:scale-105"
                  suppressHydrationWarning
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;