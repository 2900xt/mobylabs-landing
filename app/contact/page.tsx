"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formType, setFormType] = useState<"buoy" | "suam">("buoy");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { formType, ...formData });
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Main Content */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 mt-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the solution that fits your needs and get a custom quote
            </p>
          </div>

          {/* Product Type Selector */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setFormType("buoy")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                formType === "buoy"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
              }`}
            >
              Buoy Network
              <div className="text-xs font-normal mt-1">For Organizations</div>
            </button>
            <button
              onClick={() => setFormType("suam")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                formType === "suam"
                  ? "bg-cyan-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-300"
              }`}
            >
              SUAM System
              <div className="text-xs font-normal mt-1">For Individual Vessels</div>
            </button>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    {formType === "buoy" ? "Organization Name *" : "Company/Vessel Name"}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required={formType === "buoy"}
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder={formType === "buoy" ? "ABC Shipping Co." : "My Vessel"}
                  />
                </div>
              </div>

              {/* Buoy Network Specific Fields */}
              {formType === "buoy" && (
                <>
                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select
                      id="organizationType"
                      name="organizationType"
                      required
                      value={formData.organizationType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select organization type...</option>
                      <option value="shipping">Shipping Company</option>
                      <option value="coastal">Coastal Management</option>
                      <option value="research">Research Institution</option>
                      <option value="government">Government Agency</option>
                      <option value="conservation">Conservation Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fleetSize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Fleet Size / Coverage Area *
                    </label>
                    <input
                      type="text"
                      id="fleetSize"
                      name="fleetSize"
                      required
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="e.g., 10 vessels, 50 sq km"
                    />
                  </div>
                </>
              )}

              {/* SUAM Specific Fields */}
              {formType === "suam" && (
                <div>
                  <label htmlFor="fleetSize" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Vessels
                  </label>
                  <input
                    type="text"
                    id="fleetSize"
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="e.g., 1, 3, 5"
                  />
                </div>
              )}

              {/* Common Fields */}
              <div>
                <label htmlFor="deploymentArea" className="block text-sm font-semibold text-gray-700 mb-2">
                  Deployment/Operating Area *
                </label>
                <input
                  type="text"
                  id="deploymentArea"
                  name="deploymentArea"
                  required
                  value={formData.deploymentArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., Pacific Northwest, Gulf of Maine"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Use Case *
                </label>
                <input
                  type="text"
                  id="useCase"
                  name="useCase"
                  required
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., Shipping route protection, Research, Commercial fishing"
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              {/* Pricing Estimate */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Estimated Pricing Range
                </h3>
                <p className="text-gray-700">
                  {formType === "buoy" ? (
                    <>
                      <span className="text-2xl font-bold text-blue-600">$150 - $250</span> per buoy unit
                      <br />
                      <span className="text-sm text-gray-600">Volume discounts available for orders of 10+ units</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-cyan-600">$800 - $1,200</span> per SUAM system
                      <br />
                      <span className="text-sm text-gray-600">Installation and training included</span>
                    </>
                  )}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                  formType === "buoy"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-cyan-600 hover:bg-cyan-700"
                }`}
              >
                Request Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              Have questions? Contact us directly:
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Email: <a href="mailto:contact@mobylabs.com" className="text-blue-600 hover:underline">contact@mobylabs.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
