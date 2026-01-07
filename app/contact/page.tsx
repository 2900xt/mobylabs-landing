"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<"buoy" | "suam">("buoy");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "buoy" || type === "suam") {
      setFormType(type);
    }
  }, [searchParams]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "",
    fleetSize: "",
    deploymentArea: "",
    useCase: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formType, ...formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        organizationType: "",
        fleetSize: "",
        deploymentArea: "",
        useCase: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative">
      {/* Background effects matching hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-medium mb-4 shadow-lg">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
              </span>
              For Organizations
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Request a Quote
              </span>
            </h1>
          </div>

          {/* Product Type Selector */}
          <div className="flex gap-3 mb-5 justify-center flex-wrap">
            <button
              onClick={() => setFormType("buoy")}
              className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                formType === "buoy"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                  : "bg-white/5 backdrop-blur-xl text-white/70 border border-white/20 hover:border-cyan-400/50 hover:text-white"
              }`}
            >
              Buoy Network
              <div className="text-[10px] font-normal mt-0.5 opacity-80">For Organizations</div>
            </button>
            <button
              onClick={() => setFormType("suam")}
              className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                formType === "suam"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                  : "bg-white/5 backdrop-blur-xl text-white/70 border border-white/20 hover:border-cyan-400/50 hover:text-white"
              }`}
            >
              Moby Labs SUAM
              <div className="text-[10px] font-normal mt-0.5 opacity-80">For Individual Vessels</div>
            </button>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-xl p-5 md:p-6 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-white/80 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-white/80 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-semibold text-white/80 mb-1">
                    {formType === "buoy" ? "Organization Name *" : "Company/Vessel Name"}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required={formType === "buoy"}
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder={formType === "buoy" ? "ABC Shipping Co." : "My Vessel"}
                  />
                </div>
              </div>

              {/* Buoy Network Specific Fields */}
              {formType === "buoy" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="organizationType" className="block text-xs font-semibold text-white/80 mb-1">
                      Organization Type *
                    </label>
                    <select
                      id="organizationType"
                      name="organizationType"
                      required
                      value={formData.organizationType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white"
                    >
                      <option value="" className="bg-slate-900">Select type...</option>
                      <option value="shipping" className="bg-slate-900">Shipping Company</option>
                      <option value="coastal" className="bg-slate-900">Coastal Management</option>
                      <option value="research" className="bg-slate-900">Research Institution</option>
                      <option value="government" className="bg-slate-900">Government Agency</option>
                      <option value="conservation" className="bg-slate-900">Conservation Organization</option>
                      <option value="other" className="bg-slate-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fleetSize" className="block text-xs font-semibold text-white/80 mb-1">
                      Fleet Size / Coverage Area *
                    </label>
                    <input
                      type="text"
                      id="fleetSize"
                      name="fleetSize"
                      required
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                      placeholder="e.g., 10 vessels, 50 sq km"
                    />
                  </div>
                </div>
              )}

              {/* SUAM Specific Fields */}
              {formType === "suam" && (
                <div>
                  <label htmlFor="fleetSize" className="block text-xs font-semibold text-white/80 mb-1">
                    Number of Vessels
                  </label>
                  <input
                    type="text"
                    id="fleetSize"
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder="e.g., 1, 3, 5"
                  />
                </div>
              )}

              {/* Common Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="deploymentArea" className="block text-xs font-semibold text-white/80 mb-1">
                    Deployment/Operating Area *
                  </label>
                  <input
                    type="text"
                    id="deploymentArea"
                    name="deploymentArea"
                    required
                    value={formData.deploymentArea}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder="e.g., Pacific Northwest"
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-xs font-semibold text-white/80 mb-1">
                    Primary Use Case *
                  </label>
                  <input
                    type="text"
                    id="useCase"
                    name="useCase"
                    required
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-white/40"
                    placeholder="e.g., Route protection"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-xs font-semibold text-white/80 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={2}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none text-white placeholder-white/40"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              {/* Pricing Estimate */}
              <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-3">
                <h3 className="text-sm font-bold text-white mb-1">
                  Estimated Pricing Range
                </h3>
                <p className="text-white/80 text-sm">
                  {formType === "buoy" ? (
                    <>
                      <span className="text-lg font-bold text-cyan-400">$150 - $250</span> per buoy unit
                      <span className="text-xs text-white/60 ml-2">Volume discounts for 10+ units</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg font-bold text-cyan-400">$800 - $1,200</span> per SUAM system
                      <span className="text-xs text-white/60 ml-2">Installation included</span>
                    </>
                  )}
                </p>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4">
                  <p className="font-semibold text-sm text-emerald-400">Thank you for your inquiry!</p>
                  <p className="text-xs mb-3 text-white/70">We'll get back to you soon at the email address you provided.</p>
                  <div className="border-t border-emerald-400/20 pt-3">
                    <p className="font-semibold text-white text-sm mb-2">Want to learn more before we follow up?</p>
                    <a
                      href="https://cal.com/ahat-rawjani/moby-labs-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule a Demo
                    </a>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-3">
                  <p className="font-semibold text-red-400 text-sm">Something went wrong.</p>
                  <p className="text-xs text-white/70">Please try again or contact us directly at contact@mobylabs.org</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg text-white font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-xs mb-1">
              Have questions? Contact us directly:
            </p>
            <p className="text-sm font-semibold text-white">
              <a href="mailto:contact@mobylabs.org" className="text-cyan-400 hover:underline">contact@mobylabs.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-white/60">Loading...</div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
