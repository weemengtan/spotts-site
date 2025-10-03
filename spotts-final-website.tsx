import React, { useState, useEffect } from 'react';

export default function SpottsFinalWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showSource, setShowSource] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { 
      title: "Perceive", 
      desc: "Gathers data from your systems", 
      detail: "CRM, email, databases, APIs",
      source: "IBM Research, 2025"
    },
    { 
      title: "Reason", 
      desc: "Analyzes using AI", 
      detail: "Understands context, makes decisions",
      source: "NVIDIA, 2024"
    },
    { 
      title: "Act", 
      desc: "Executes with oversight", 
      detail: "Updates records, routes to humans when needed",
      source: "AWS, 2025"
    },
    { 
      title: "Learn", 
      desc: "Improves over time", 
      detail: "Gets smarter with feedback",
      source: "Google Cloud, 2025"
    }
  ];

  const problems = [
    {
      title: "Customer support overwhelm",
      stat: "58% adoption rate for automation",
      solution: "AI agents handle routine cases 24/7, escalate complex ones with full context to human teams",
      outcome: "Teams focus on problems requiring human judgment",
      source: "IDC Southeast Asia Survey, 2025",
      sourceUrl: "https://www.manilatimes.net/2025/08/17/business/sunday-business-it/most-asean-organizations-adopting-ai-agents-in-the-next-12-months/2169037"
    },
    {
      title: "Manual processes eating time",
      stat: "50% time reduction achieved",
      solution: "AI agents automate documentation and testing, with human approval for critical decisions",
      outcome: "Automotive supplier: 50% faster test case generation for junior engineers",
      source: "McKinsey Advanced Industries, 2025",
      sourceUrl: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/empowering-advanced-industries-with-agentic-ai"
    },
    {
      title: "IT always firefighting",
      stat: "AI agents now deployed in SOCs",
      solution: "AI agents investigate incidents and correlate threats, escalate to human analysts for final decisions",
      outcome: "Proactive threat detection with human oversight for response actions",
      source: "TechTarget Enterprise AI, 2025",
      sourceUrl: "https://www.techtarget.com/searchenterpriseai/feature/Real-world-agentic-AI-examples-and-use-cases"
    },
    {
      title: "Supply chain complexity",
      stat: "20%+ logistics cost reduction",
      solution: "AI agents monitor and optimize, recommend actions to human operators for approval",
      outcome: "Real-time optimization with human oversight on major routing decisions",
      source: "McKinsey Research, 2025",
      sourceUrl: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/empowering-advanced-industries-with-agentic-ai"
    }
  ];

  const outcomes = [
    { 
      company: "Writer Platform", 
      metric: "333% ROI", 
      detail: "in 3 years, $12.02M net value, <6 month payback",
      source: "Forrester TEI Study, 2025",
      sourceUrl: "https://writer.com/blog/roi-for-generative-ai/"
    },
    { 
      company: "Enterprise Deployments", 
      metric: "74% achieve ROI", 
      detail: "within first year of deployment",
      source: "Google Cloud ROI Report, 2025",
      sourceUrl: "https://cloud.google.com/transform/roi-of-ai-how-agents-help-business"
    },
    { 
      company: "Financial Services", 
      metric: "85% faster", 
      detail: "review processes, 50% agency cost reduction",
      source: "Forrester/Writer Study, 2025",
      sourceUrl: "https://writer.com/blog/roi-for-generative-ai/"
    },
    { 
      company: "Manufacturing", 
      metric: "20%+ reduction", 
      detail: "in logistics and inventory costs",
      source: "McKinsey Research, 2025",
      sourceUrl: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/empowering-advanced-industries-with-agentic-ai"
    }
  ];

  const SourceLink = ({ source, url, index }) => (
    <div className="relative inline-block">
      <button
        className="text-xs ml-1 px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
        style={{color: '#78350F'}}
        onMouseEnter={() => setShowSource(index)}
        onMouseLeave={() => setShowSource(null)}
      >
        [source]
      </button>
      {showSource === index && (
        <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg p-3 w-64 z-10 text-xs">
          <div className="font-normal mb-1">{source}</div>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-words">
            {url}
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white" style={{fontFamily: '"Roboto Serif", serif'}}>
      
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-xl font-light">spotts<span className="text-gray-400">.ai</span></div>
          <div className="flex gap-6 items-center text-sm">
            <a href="#what" className="text-gray-600 hover:text-black">What It Does</a>
            <a href="#problems" className="text-gray-600 hover:text-black">Use Cases</a>
            <a href="#outcomes" className="text-gray-600 hover:text-black">Outcomes</a>
            <button 
              className="px-5 py-2 rounded-full transition-all"
              style={{backgroundColor: '#06B6D4', color: 'white'}}
            >
              Explore Your Use Case
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-light mb-6 leading-tight">
            AI agents that work<br />
            alongside your team
          </h1>
          <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions. Your team stays in control.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-7 py-3 rounded-full font-normal transition-all text-base"
              style={{backgroundColor: '#06B6D4', color: 'white'}}
            >
              See How It Works
            </button>
            <button className="px-7 py-3 rounded-full border border-gray-300 font-normal transition-all text-base hover:border-gray-500">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-light mb-2" style={{color: '#78350F'}}>333% ROI</div>
            <div className="text-sm font-light text-gray-600">
              Forrester study, 3-year average
              <SourceLink 
                source="Forrester Total Economic Impact Study, 2025" 
                url="https://writer.com/blog/roi-for-generative-ai/"
                index="stat1"
              />
            </div>
          </div>
          <div>
            <div className="text-4xl font-light mb-2" style={{color: '#78350F'}}>74%</div>
            <div className="text-sm font-light text-gray-600">
              Achieve ROI within year one
              <SourceLink 
                source="Google Cloud ROI Report, 2025" 
                url="https://cloud.google.com/transform/roi-of-ai-how-agents-help-business"
                index="stat2"
              />
            </div>
          </div>
          <div>
            <div className="text-4xl font-light mb-2" style={{color: '#78350F'}}>78%</div>
            <div className="text-sm font-light text-gray-600">
              Use AI but need better implementation
              <SourceLink 
                source="McKinsey AI State Report, 2025" 
                url="https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage"
                index="stat3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What It Actually Does */}
      <section className="py-24 px-8" id="what">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light mb-4">What is agentic AI?</h2>
          <p className="text-lg font-light text-gray-600 mb-16 max-w-3xl leading-relaxed">
            AI systems that can complete multi-step tasks independently, while keeping humans in the loop for critical decisions.
          </p>
          
          <div className="bg-gray-50 p-12 rounded-lg mb-12">
            <div className="grid grid-cols-2 gap-12 mb-8">
              <div>
                <div className="text-sm font-normal mb-3 text-gray-500">Regular AI (like ChatGPT)</div>
                <div className="space-y-3 text-sm font-light">
                  <div>You: "Draft an email to this customer"</div>
                  <div>AI: "Here's your email"</div>
                  <div>You: "Now update the CRM"</div>
                  <div>AI: "I can't do that"</div>
                  <div className="pt-2 text-gray-500 italic">You're still doing the work.</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-normal mb-3 text-gray-500">Agentic AI (with oversight)</div>
                <div className="space-y-3 text-sm font-light">
                  <div>You: "Handle routine customer inquiries"</div>
                  <div>AI: ✓ Reads inquiries</div>
                  <div className="pl-6">✓ Checks order history</div>
                  <div className="pl-6">✓ Processes standard refunds (&lt;$100)</div>
                  <div className="pl-6">⚠️ Escalates complex cases to you</div>
                  <div className="pt-2 font-normal">You approve, AI executes.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-light mb-8">How it works: Four steps</h3>
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div 
                  key={i}
                  className="relative"
                  onMouseEnter={() => setActiveStep(i)}
                >
                  <div className={`p-6 rounded-lg border transition-all cursor-pointer ${
                    activeStep === i ? 'border-gray-400 bg-white' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="text-3xl font-light mb-2" style={{color: activeStep === i ? '#78350F' : '#9CA3AF'}}>
                      {i + 1}
                    </div>
                    <div className="text-base font-normal mb-2">{step.title}</div>
                    <div className="text-sm font-light text-gray-600 mb-3">{step.desc}</div>
                    <div className="text-xs font-light text-gray-500 mb-2">{step.detail}</div>
                    <div className="text-xs text-gray-400">{step.source}</div>
                  </div>
                  {i < 3 && (
                    <div className="absolute top-1/2 -right-3 text-gray-300">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-8 rounded-lg">
            <div className="text-sm font-normal mb-3">Human oversight is built in</div>
            <div className="text-sm font-light leading-relaxed">
              Agentic AI handles routine decisions independently, but critical actions—like large refunds, contract approvals, or security responses—require human approval. You set the rules: What can AI do autonomously? What needs your sign-off? The system learns your preferences and escalates appropriately.
            </div>
          </div>
        </div>
      </section>

      {/* Problems It Solves */}
      <section className="py-24 px-8 bg-gray-50" id="problems">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4">What problems does this solve?</h2>
          <p className="text-lg font-light text-gray-600 mb-16 max-w-3xl leading-relaxed">
            Real business issues where AI agents are delivering measurable results—with human oversight maintaining control.
          </p>

          <div className="space-y-6">
            {problems.map((problem, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3">
                    <div className="text-lg font-normal mb-2">{problem.title}</div>
                    <div className="text-sm text-gray-500">
                      {problem.stat}
                      <SourceLink 
                        source={problem.source}
                        url={problem.sourceUrl}
                        index={`problem${i}`}
                      />
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="text-sm font-normal mb-2 text-gray-600">What AI agents do</div>
                    <div className="text-sm font-light">{problem.solution}</div>
                  </div>
                  <div className="col-span-4">
                    <div className="text-sm font-normal mb-2" style={{color: '#78350F'}}>Business outcome</div>
                    <div className="text-sm font-light">{problem.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-base font-normal mb-4">The reality about jobs and AI</div>
            <div className="text-sm font-light text-gray-700 leading-relaxed space-y-3">
              <p>AI agents don't replace your team—they handle the repetitive work that drains energy and time. That automotive supplier saw junior engineers move from documentation to actual engineering work. Support teams solve complex problems instead of resetting passwords.</p>
              <p><strong className="font-normal">The truth:</strong> Your team becomes more strategic, not redundant. AI handles the grunt work. Humans handle judgment, relationships, and decisions that require context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Outcomes */}
      <section className="py-24 px-8" id="outcomes">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Does it actually work?</h2>
          <p className="text-lg font-light text-gray-600 mb-16 max-w-3xl leading-relaxed">
            Here's what companies are seeing. Every number is sourced and verifiable.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-16">
            {outcomes.map((outcome, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-3xl font-light mb-2" style={{color: '#78350F'}}>
                  {outcome.metric}
                </div>
                <div className="text-sm font-light text-gray-600 mb-4">{outcome.detail}</div>
                <div className="text-xs font-normal text-gray-500 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span>{outcome.company}</span>
                  <SourceLink 
                    source={outcome.source}
                    url={outcome.sourceUrl}
                    index={`outcome${i}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-10 mb-12">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-2xl font-light mb-6">The pattern: Start small, scale fast</div>
                <div className="space-y-6">
                  <div>
                    <div className="text-base font-normal mb-2">Weeks 1-4: Prototype</div>
                    <div className="text-sm font-light text-gray-600">Pick one workflow, build it, test with real data</div>
                  </div>
                  <div>
                    <div className="text-base font-normal mb-2">Month 2-3: Deploy & Measure</div>
                    <div className="text-sm font-light text-gray-600">Production deployment with human oversight protocols</div>
                  </div>
                  <div>
                    <div className="text-base font-normal mb-2">Month 6-12: ROI Realized</div>
                    <div className="text-sm font-light text-gray-600">
                      74% of companies see returns by year one
                      <SourceLink 
                        source="Google Cloud, 2025"
                        url="https://cloud.google.com/transform/roi-of-ai-how-agents-help-business"
                        index="timeline"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-light mb-6">Why most AI projects fail</div>
                <div className="text-sm font-light text-gray-700 leading-relaxed space-y-3">
                  <p>78% of companies use AI. 80% see no ROI. Why?
                    <SourceLink 
                      source="McKinsey, 2025"
                      url="https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage"
                      index="paradox"
                    />
                  </p>
                  <p><strong className="font-normal">The problem:</strong> They deploy ChatGPT for emails instead of automating actual business processes.</p>
                  <p><strong className="font-normal">What works:</strong> Identifying complete workflows where AI can take full ownership (with human oversight) and measuring real impact—time saved, costs reduced, revenue increased.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-lg">
            <div className="text-sm font-normal mb-3">Our commitment to transparency</div>
            <div className="text-sm font-light text-gray-700 leading-relaxed">
              Every metric on this page links to its source. We don't make up numbers. If we can't verify it, we don't claim it. Hover over any [source] tag to see the research behind the data.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Ready to explore your use case?</h2>
          <p className="text-lg font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We start with a conversation about your actual workflows. No generic demos. We prototype one use case in 2-4 weeks. If it works, we scale. If not, we pivot.
          </p>

          <div className="bg-white p-10 rounded-lg border border-gray-200 mb-8">
            <div className="text-lg font-normal mb-6">The 4-week discovery process</div>
            <div className="grid grid-cols-4 gap-6 text-left">
              <div>
                <div className="text-sm font-normal mb-2 text-gray-600">Week 1</div>
                <div className="text-sm font-light">Discovery: What's your biggest operational bottleneck?</div>
              </div>
              <div>
                <div className="text-sm font-normal mb-2 text-gray-600">Week 2</div>
                <div className="text-sm font-light">Design: Map workflow, define oversight rules</div>
              </div>
              <div>
                <div className="text-sm font-normal mb-2 text-gray-600">Week 3-4</div>
                <div className="text-sm font-light">Build & test prototype with your real data</div>
              </div>
              <div>
                <div className="text-sm font-normal mb-2 text-gray-600">Decision</div>
                <div className="text-sm font-light">Works? Scale it. Doesn't? We pivot or part ways.</div>
              </div>
            </div>
          </div>

          <button 
            className="px-8 py-4 rounded-full font-normal transition-all text-base"
            style={{backgroundColor: '#06B6D4', color: 'white'}}
          >
            Schedule Discovery Call
          </button>
          <div className="mt-6 text-sm text-gray-500">
            30 minutes. We discuss your workflows, not our features.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-light mb-3">spotts<span className="text-gray-400">.ai</span></div>
              <div className="text-xs font-light text-gray-600">AI agents with human oversight</div>
            </div>
            <div>
              <div className="text-xs font-normal mb-3">Platform</div>
              <div className="space-y-2 text-xs font-light text-gray-600">
                <div>How It Works</div>
                <div>Use Cases</div>
                <div>Research</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-normal mb-3">Company</div>
              <div className="space-y-2 text-xs font-light text-gray-600">
                <div>About</div>
                <div>Case Studies</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-normal mb-3">Contact</div>
              <div className="space-y-2 text-xs font-light text-gray-600">
                <div>support@spotts.ai</div>
                <div>LinkedIn</div>
              </div>
            </div>
          </div>
          <div className="text-xs font-light text-gray-400 text-center pt-8 border-t border-gray-100">
            © 2025 Spotts.ai • All metrics sourced and verifiable
          </div>
        </div>
      </footer>

    </div>
  );
}