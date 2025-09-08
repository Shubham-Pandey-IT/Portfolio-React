import { Instagram, Linkedin, Mail, PhoneCall, Send, Twitter, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary dark:text-secondary-dark">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary dark:text-secondary-dark mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate? I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-secondary-dark">Contact</h3>

            {/* Email */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-secondary dark:text-secondary-dark">Email</h4>
                <a
                  href="mailto:shubhamp7282@gmail.com"
                  className="text-secondary dark:text-secondary-dark hover:text-primary transition-colors"
                >
                  shubhamp7282@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-secondary dark:text-secondary-dark">Phone Number</h4>
                <a
                  href="tel:+916200157632"
                  className="text-secondary dark:text-secondary-dark hover:text-primary transition-colors"
                >
                  +91 6200157632
                </a>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="pt-6 text-center">
              <h4 className="font-semibold mb-4 text-secondary dark:text-secondary-dark">Connect with Me</h4>
              <div className="flex space-x-6 justify-center text-secondary dark:text-secondary-dark">
                <a href="https://www.linkedin.com/in/shubhamp7282" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/Shubham-Pandey-IT" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 !text-black dark:!text-white">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-m font-medium mb-2 !text-black dark:!text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-background 
                             text-black dark:text-white 
                             placeholder-gray-600 dark:placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Your name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-m font-medium mb-2 !text-black dark:!text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-background 
                             text-black dark:text-white 
                             placeholder-gray-600 dark:placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-m font-medium mb-2 !text-black dark:!text-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-background 
                             text-black dark:text-white 
                             placeholder-gray-600 dark:placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95"
              >
                <Send size={16} /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
