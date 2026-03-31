import React, { FormEvent } from "react";
import { CalendarClock, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `New Inquiry - ${service || "General"}`;
    const body = [
      `Name: ${name || "N/A"}`,
      `Email: ${email || "N/A"}`,
      `Service: ${service || "N/A"}`,
      "",
      "Project Summary:",
      message || "N/A",
    ].join("\n");

    window.location.href = `mailto:zillinginfo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.10),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Let&apos;s scope your AI project</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Share your goals and current bottlenecks. We&apos;ll reply with a practical implementation plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-300"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:zillinginfo@gmail.com" className="text-gray-300 hover:text-cyan-300">zillinginfo@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-300"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a href="https://wa.me/918799253030" className="text-gray-300 hover:text-cyan-300">+91 8799253030</a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-purple-500/15 text-purple-300"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Vadodara, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">
              <div className="flex items-start gap-3">
                <CalendarClock className="w-5 h-5 text-cyan-300 mt-0.5" />
                <p className="text-gray-200 text-sm">
                  Typical response time: within 24 hours on business days.
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/40"><Github className="w-4 h-4 text-gray-300" /></a>
              <a href="#" className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/40"><Linkedin className="w-4 h-4 text-gray-300" /></a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-7">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <input name="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Work Email</label>
                  <input name="email" type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Service of Interest</label>
                <select name="service" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400">
                  <option className="bg-gray-900">AI-Powered Web Development</option>
                  <option className="bg-gray-900">Custom Software Development</option>
                  <option className="bg-gray-900">Business Process Automation</option>
                  <option className="bg-gray-900">AI Call Agents</option>
                  <option className="bg-gray-900">Mobile App Development</option>
                  <option className="bg-gray-900">Need Pricing Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Project Summary</label>
                <textarea name="message" rows={6} placeholder="Tell us about your current process, goals, and timeline..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-cyan-400" />
              </div>

              <button type="submit" className="w-full px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-colors inline-flex items-center justify-center gap-2">
                Send Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

