import { Cpu, TrendingUp, Award, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

// Table 4 — Competition results (own architectures)
const competitionResults = [
  { team: 'SMART AGRICULTURES', valAcc: '96.7%', testAcc: '84.1%', f1: '0.84', gap: '12.7%', size: '6,321' },
  { team: 'AI-4o',              valAcc: '94.2%', testAcc: '83.4%', f1: '0.83', gap: '10.8%', size: '7,344' },
  { team: 'GreenAI',            valAcc: '96.7%', testAcc: '82.5%', f1: '0.83', gap: '14.2%', size: '3,785' },
  { team: 'AiGro',              valAcc: '98.7%', testAcc: '80.3%', f1: '0.80', gap: '18.5%', size: '3,633' },
  { team: 'CACTUS',             valAcc: '96.0%', testAcc: '80.1%', f1: '0.80', gap: '15.9%', size: '3,801' },
  { team: 'RUSTICUS',           valAcc: '98.1%', testAcc: '79.6%', f1: '0.80', gap: '18.5%', size: '3,446' },
  { team: 'CHAJARA',            valAcc: '98.6%', testAcc: '77.7%', f1: '0.78', gap: '20.9%', size: '2,540' },
  { team: 'Scorpions',          valAcc: '96.0%', testAcc: '76.7%', f1: '0.77', gap: '19.2%', size: '2,795' },
  { team: 'Condimenteum',       valAcc: '93.6%', testAcc: '71.7%', f1: '0.73', gap: '21.9%', size: '5,504' },
  { team: 'PLT',                valAcc: '98.2%', testAcc: '69.9%', f1: '0.71', gap: '28.4%', size: '6,556' },
  { team: 'The Neural Ninjas',  valAcc: '97.6%', testAcc: '67.4%', f1: '0.68', gap: '30.2%', size: '1,642' },
  { team: 'Organization team',  valAcc: '99.2%', testAcc: '63.3%', f1: '0.63', gap: '35.9%', size: '3,306' },
];

export default function Results() {
  return (
    <section
      id="results"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="results-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeading
            title="Baseline Results"
            subtitle="Dual architecture baselines evaluated under TOTO and LOTO protocols, providing benchmarks for future researchers using the dataset."
          />
        </AnimatedSection>

        {/* Models */}
        <AnimatedSection delay={100}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <Cpu size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            Baseline Architectures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              {
                name: 'DenseNet121',
                type: 'CNN',
                params: '8M parameters',
                role: 'Efficient backbone',
                desc: 'Uses dense connections between layers for efficient feature reuse. Pretrained on ImageNet-1K.',
              },
              {
                name: 'Swin Transformer',
                type: 'Vision Transformer',
                params: '28M parameters',
                role: 'Attention-based baseline',
                desc: 'Computes self-attention within local windows with shifted windowing. Pretrained on ImageNet-1K.',
              },
            ].map((model) => (
              <div
                key={model.name}
                className="p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE]"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-[#10243D] text-base">{model.name}</h4>
                    <span className="text-xs text-[#5A7A8A]">{model.type}</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#94CCC6]/15 border border-[#94CCC6]/30 text-[#10243D] font-medium">
                    {model.params}
                  </span>
                </div>
                <p className="text-sm text-[#5A7A8A] leading-relaxed">{model.desc}</p>
                <div className="mt-3 text-xs text-[#1CC9A9] font-medium">
                  {model.role}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Training config note */}
        <AnimatedSection delay={120}>
          <div className="mb-16 p-4 rounded-xl bg-[#10243D]/5 border border-[#10243D]/10 text-xs text-[#5A7A8A] leading-relaxed font-mono">
            Training: AdamW (lr=1e-4, wd=1e-4) · Cosine annealing · Batch 32 · 20 epochs · 224×224px input · NVIDIA H100 NVL GPU
          </div>
        </AnimatedSection>

        {/* TOTO Results */}
        <AnimatedSection delay={150}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            TOTO Protocol — Validation vs. Test Gap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
              {
                model: 'DenseNet121',
                valAcc: '97.40%',
                testAcc: '81.19%',
                gap: '16.20%',
                color: '#10243D',
              },
              {
                model: 'Swin Transformer',
                valAcc: '98.59%',
                testAcc: '87.21%',
                gap: '11.37%',
                color: '#1CC9A9',
              },
            ].map((r) => (
              <div
                key={r.model}
                className="p-6 rounded-2xl bg-white border border-[#E8EEEE]"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
              >
                <h4 className="font-bold text-[#10243D] mb-5">{r.model}</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-xl bg-[#F8FAFA]">
                    <div className="text-lg font-extrabold text-[#10243D] font-mono">{r.valAcc}</div>
                    <div className="text-xs text-[#5A7A8A] mt-1">Val Accuracy</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-[#F8FAFA]">
                    <div className="text-lg font-extrabold text-[#1CC9A9] font-mono">{r.testAcc}</div>
                    <div className="text-xs text-[#5A7A8A] mt-1">Test Accuracy</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-red-50">
                    <div className="text-lg font-extrabold text-red-500 font-mono">−{r.gap}</div>
                    <div className="text-xs text-[#5A7A8A] mt-1">Val–Test Gap</div>
                  </div>
                </div>
                <p className="text-xs text-[#5A7A8A] mt-4 leading-relaxed">
                  The gap between validation and test accuracy emerged by epoch 5 and remained stable throughout training — indicating distributional shift, not overfitting.
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* LOTO Results — Improvement */}
        <AnimatedSection delay={200}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2 mt-10">
            <Zap size={18} className="text-[#1CC9A9]" strokeWidth={1.5} />
            LOTO Protocol — Collaborative Training Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              {
                model: 'DenseNet121',
                totoTest: '81.19%',
                lotoTest: '95.31%',
                improvement: '+14.12pp',
                gapBefore: '16.20%',
                gapAfter: '2.82%',
                gapReduction: '−82%',
                varReduction: '−40%',
              },
              {
                model: 'Swin Transformer',
                totoTest: '87.21%',
                lotoTest: '97.04%',
                improvement: '+9.83pp',
                gapBefore: '11.37%',
                gapAfter: '1.78%',
                gapReduction: '−84%',
                varReduction: '−54%',
              },
            ].map((r) => (
              <div
                key={r.model}
                className="p-6 rounded-2xl bg-white border-2 border-[#1CC9A9]/20"
                style={{ boxShadow: '0 4px 24px rgba(28,201,169,0.08)' }}
              >
                <h4 className="font-bold text-[#10243D] mb-5">{r.model}</h4>
                {/* Test accuracy before → after */}
                <div className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-[#F8FAFA]">
                  <div className="text-center flex-1">
                    <div className="text-xs text-[#5A7A8A] mb-1 uppercase tracking-wide">TOTO</div>
                    <div className="text-xl font-extrabold text-[#5A7A8A] font-mono">{r.totoTest}</div>
                  </div>
                  <div className="text-[#1CC9A9] font-bold text-lg">→</div>
                  <div className="text-center flex-1">
                    <div className="text-xs text-[#5A7A8A] mb-1 uppercase tracking-wide">LOTO</div>
                    <div className="text-xl font-extrabold text-[#1CC9A9] font-mono">{r.lotoTest}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#5A7A8A] mb-1 uppercase tracking-wide">Gain</div>
                    <div className="text-sm font-bold text-[#1CC9A9]">{r.improvement}</div>
                  </div>
                </div>
                {/* Gap reduction */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2.5 rounded-lg bg-red-50">
                    <div className="text-sm font-bold text-red-400 font-mono">{r.gapBefore}</div>
                    <div className="text-[10px] text-[#5A7A8A]">Gap (TOTO)</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#1CC9A9]/10">
                    <div className="text-sm font-bold text-[#1CC9A9] font-mono">{r.gapAfter}</div>
                    <div className="text-[10px] text-[#5A7A8A]">Gap (LOTO)</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#1CC9A9]/15">
                    <div className="text-sm font-bold text-[#1CC9A9] font-mono">{r.gapReduction}</div>
                    <div className="text-[10px] text-[#5A7A8A]">Gap reduction</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-[#5A7A8A] text-center">
                  Performance variance reduced by{' '}
                  <span className="font-semibold text-[#1CC9A9]">{r.varReduction}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Finding */}
        <AnimatedSection delay={250}>
          <div
            className="p-8 rounded-2xl mb-16"
            style={{ background: 'linear-gradient(135deg, #10243D 0%, #1a3a52 100%)' }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#1CC9A9]/20 shrink-0 mt-0.5">
                <Zap size={20} className="text-[#1CC9A9]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">Key Finding</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Environmental diversity was the primary driver of generalization performance across teams.
                  Dataset size, by contrast, was nearly uncorrelated with test accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl font-extrabold text-[#1CC9A9] font-mono">r ≈ 0.60</div>
                    <div className="text-xs text-white/60 mt-1">Environmental Diversity → Generalization</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl font-extrabold text-[#94CCC6] font-mono">r ≈ 0.10</div>
                    <div className="text-xs text-white/60 mt-1">Dataset Size → Generalization</div>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-4">
                  Once sufficient data diversity is present, architecture choice has diminishing returns.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Competition Results Table */}
        <AnimatedSection delay={300}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <Award size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            Competition Results — Teams&apos; Own Architectures
          </h3>
          <p className="text-sm text-[#5A7A8A] mb-4 max-w-2xl">
            Each team used their own architecture and training strategy. Mean validation accuracy: 96.77% ± 1.70%. Mean test accuracy: 76.41% ± 6.73%.
          </p>
          <div
            className="rounded-2xl border border-[#E8EEEE] overflow-hidden"
            style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
          >
            <div className="overflow-x-auto">
              <table className="data-table" aria-label="Competition results with teams' own architectures">
                <thead>
                  <tr>
                    <th scope="col">Team</th>
                    <th scope="col">Val Acc</th>
                    <th scope="col">Test Acc</th>
                    <th scope="col">F1 Score</th>
                    <th scope="col">Gap</th>
                    <th scope="col" className="total-cell">Dataset Size</th>
                  </tr>
                </thead>
                <tbody>
                  {competitionResults.map((row, i) => (
                    <tr key={row.team}>
                      <td className="font-medium text-[#10243D]">
                        {i < 3 && (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1CC9A9]/15 text-[#1CC9A9] text-[10px] font-bold mr-2">
                            {i + 1}
                          </span>
                        )}
                        {row.team}
                      </td>
                      <td>{row.valAcc}</td>
                      <td className="font-semibold text-[#1CC9A9]">{row.testAcc}</td>
                      <td>{row.f1}</td>
                      <td className="text-red-400">{row.gap}</td>
                      <td className="total-cell">{row.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
