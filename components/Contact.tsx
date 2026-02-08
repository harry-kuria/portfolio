
import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Try to use EmailJS if available, otherwise fallback to mailto
      const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (emailjsPublicKey && emailjsServiceId && emailjsTemplateId) {
        // Use EmailJS REST API directly
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: emailjsServiceId,
            template_id: emailjsTemplateId,
            user_id: emailjsPublicKey,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: PERSONAL_INFO.email,
            },
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = PERSONAL_INFO.phone.replace(/\s/g, ''); // Remove spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-8">
              <Sparkles className="w-3 h-3 mr-2" />
              Available for full-time & consultancy
            </div>
            <h3 className="text-5xl lg:text-6xl font-black text-white mb-10 tracking-tight">Let's build the <br /><span className="text-gradient">next big thing.</span></h3>

            <div className="space-y-10">
              <div className="flex items-center group cursor-pointer">
                <div className="w-16 h-16 bg-slate-900 border border-white/5 text-slate-400 rounded-3xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Send an Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl text-white font-bold hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 bg-slate-900 border border-white/5 text-slate-400 rounded-3xl flex items-center justify-center mr-6 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Direct Line</p>
                  <a href={callUrl} className="text-xl text-white font-bold hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 bg-slate-900 border border-white/5 text-slate-400 rounded-3xl flex items-center justify-center mr-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Based In</p>
                  <p className="text-xl text-white font-bold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              <a href={callUrl} className="p-5 bg-green-600 text-white rounded-2xl hover:bg-green-500 transition-all hover:translate-y-[-4px] shadow-xl shadow-green-500/20 flex items-center space-x-2">
                <Phone className="w-6 h-6" />
                <span className="font-bold">Call</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-5 bg-[#25D366] text-white rounded-2xl hover:bg-[#20BA5A] transition-all hover:translate-y-[-4px] shadow-xl shadow-[#25D366]/20 flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-bold">WhatsApp</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-5 bg-white text-slate-950 rounded-2xl hover:bg-blue-500 hover:text-white transition-all hover:translate-y-[-4px] shadow-xl">
                <Github className="w-8 h-8" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 bg-blue-600 text-white rounded-2xl hover:bg-white hover:text-slate-950 transition-all hover:translate-y-[-4px] shadow-xl shadow-blue-500/20">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>

            {/* Quick Consultation Booking */}
            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-2">Need a Quick Decision?</h4>
              <p className="text-slate-400 mb-6">Schedule a 15-min discovery call to discuss your project.</p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 group transition-colors">
                Book a Consultation
                <Sparkles className="ml-2 w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          <div className="glass-card p-10 sm:p-14 rounded-[3.5rem] border border-white/5 relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white font-medium placeholder:text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white font-medium placeholder:text-slate-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-white font-medium placeholder:text-slate-700"
                ></textarea>
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-400 text-center font-bold">
                  Message sent successfully! Check your email client.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400 text-center font-bold">
                  Failed to send message. Please try again.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-blue-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-blue-500/20 hover:bg-white hover:text-slate-950 hover:translate-y-[-4px] active:scale-95 transition-all flex items-center justify-center text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-3 w-6 h-6" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p className="font-bold">© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <div className="mt-8 md:mt-0 flex items-center space-x-8 font-mono text-sm">
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> High Availability</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Modern UI</span>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
