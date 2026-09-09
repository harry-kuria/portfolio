import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const subject = encodeURIComponent(`Contact from ${formData.name} via Portfolio`);
      const body = encodeURIComponent(
        `Hi Harrison,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio website`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error opening email client:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = PERSONAL_INFO.phone.replace(/\s/g, '');
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <section id="contact" className="py-28 bg-[#FAF9FF] relative overflow-hidden border-t border-purple-100/60">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-purple-200/30 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-purple-600" />
              Available for full-time & consultancy
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Let's build the <br />
              <span className="text-purple-gradient">next big thing.</span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-center group cursor-pointer">
                <div className="w-14 h-14 bg-white border border-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Send an Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg sm:text-xl text-slate-900 font-bold hover:text-purple-600 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white border border-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Direct Line</p>
                  <a href={callUrl} className="text-lg sm:text-xl text-slate-900 font-bold hover:text-purple-600 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white border border-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Based In</p>
                  <p className="text-lg sm:text-xl text-slate-900 font-bold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3.5">
              <a href={callUrl} className="px-5 py-3.5 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all hover:-translate-y-0.5 shadow-md shadow-emerald-600/20 flex items-center space-x-2 text-sm font-bold">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3.5 bg-[#25D366] text-white rounded-2xl hover:bg-[#20BA5A] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20 flex items-center space-x-2 text-sm font-bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white text-slate-800 rounded-2xl hover:bg-purple-600 hover:text-white transition-all hover:-translate-y-0.5 shadow-sm border border-purple-100">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[#0077B5] text-white rounded-2xl hover:bg-[#005582] transition-all hover:-translate-y-0.5 shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Consultation Booking */}
            <div className="mt-10 p-6 rounded-3xl bg-white border border-purple-100 shadow-md shadow-purple-500/5">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Need a Quick Discussion?</h4>
              <p className="text-slate-600 text-sm mb-5">Schedule a 15-min discovery call to discuss your project.</p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl text-sm font-bold hover:shadow-md hover:shadow-purple-500/25 transition-all">
                <span>Book a Consultation</span>
                <Sparkles className="ml-2 w-4 h-4 text-purple-200" />
              </a>
            </div>
          </div>

          <div className="glass-card-light p-8 sm:p-12 rounded-[2.5rem] bg-white border border-purple-100 shadow-xl shadow-purple-500/5 relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-slate-50 border border-purple-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-purple-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-slate-50 border border-purple-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none resize-none text-slate-900 font-medium placeholder:text-slate-400 text-sm"
                />
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 text-center font-bold text-sm">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-center font-bold text-sm">
                  Failed to send message. Please try again.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-2xl font-bold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="ml-2.5 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-purple-100 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p className="font-semibold">© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6 font-mono text-xs">
            <span className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2" /> High Availability</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2" /> Modern Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
