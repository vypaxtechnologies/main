import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-card bg-navy-gradient px-6 py-16 text-center shadow-glow sm:px-12 md:py-24"
        >
          <div className="blob -left-20 top-0 h-72 w-72 bg-brand-blue" />
          <div className="blob -right-20 bottom-0 h-72 w-72 bg-brand-purple" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Let's build technology that moves your business forward.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-pill border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
