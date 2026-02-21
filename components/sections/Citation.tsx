'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const bibtex = `@article{agrichallenge2026,
  title   = {Cross-Team Validation: A Data-Centric Framework for Evaluating
             Model Generalization in Collaborative Agricultural
             Machine Learning},
  author  = {[Author Names]},
  journal = {arXiv preprint},
  year    = {2026},
  url     = {https://arxiv.org/abs/XXXX.XXXXX}
}`;

const apa = `[Author Names]. (2026). Cross-Team Validation: A Data-Centric Framework for Evaluating Model Generalization in Collaborative Agricultural Machine Learning. arXiv preprint. https://arxiv.org/abs/XXXX.XXXXX`;

export default function Citation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = bibtex;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="citation"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="citation-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Cite This Work"
            subtitle="If you use the AgrI Challenge dataset or the Cross-Team Validation framework in your research, please cite our paper."
          />
        </AnimatedSection>

        <div className="max-w-3xl">
          {/* Paper info card */}
          <AnimatedSection delay={100}>
            <div
              className="mb-6 p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE]"
              style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
            >
              <h3 className="font-bold text-[#10243D] text-base leading-snug mb-2">
                Cross-Team Validation: A Data-Centric Framework for Evaluating Model Generalization in Collaborative Agricultural Machine Learning
              </h3>
              <p className="text-sm text-[#5A7A8A] mb-2">
                [Author Names] · 2026 · arXiv preprint
              </p>
              <a
                href="#arxiv"
                className="inline-flex items-center gap-1.5 text-sm text-[#1CC9A9] font-medium hover:underline"
              >
                arXiv:XXXX.XXXXX
                <span className="text-[#5A7A8A] text-xs">(link available upon publication)</span>
              </a>
            </div>
          </AnimatedSection>

          {/* BibTeX block */}
          <AnimatedSection delay={150}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#5A7A8A]">
                  BibTeX
                </span>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    copied
                      ? 'bg-[#1CC9A9]/15 text-[#1CC9A9]'
                      : 'bg-[#10243D]/5 text-[#5A7A8A] hover:bg-[#1CC9A9]/10 hover:text-[#1CC9A9]'
                  }`}
                  aria-label="Copy BibTeX to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bibtex-block">
                {bibtex}
              </div>
            </div>
          </AnimatedSection>

          {/* APA citation */}
          <AnimatedSection delay={200}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5A7A8A] block mb-2">
                APA Format
              </span>
              <div
                className="p-5 rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] text-sm text-[#5A7A8A] leading-relaxed"
                style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.04)' }}
              >
                {apa}
              </div>
            </div>
          </AnimatedSection>

          {/* Note */}
          <AnimatedSection delay={250}>
            <p className="mt-5 text-xs text-[#5A7A8A]/70 italic">
              Author names and arXiv ID will be updated upon paper publication.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
