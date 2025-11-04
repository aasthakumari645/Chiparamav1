import React, { useState } from "react";

const CandidateProfilePage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    status: "",
    position: "",
    city: "",
    country: "",
    linkedin: "",
    github: "",
    skills: "",
    summary: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = "https://api.recruitcrm.io/v1/candidates";
      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        contact_number: formData.phone,
        current_organization: formData.organization,
        current_status: formData.status,
        position: formData.position,
        city: formData.city,
        country: formData.country,
        linkedin: formData.linkedin,
        github: formData.github,
        skill: formData.skills,
        candidate_summary: formData.summary,
        source: "Website",
        created_on: new Date().toISOString(),
        updated_on: new Date().toISOString(),
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "mFFkH1qjhhW4YK0QCUVA9EkPdd93iT_WFHMC3wRHvMmuk692MIBJuEl_iZXizncLcRdFGS3L8CDz6CzOzLqPHF8xNzU0NDI3Nzk4Onw6cHJvZHVjdGlvbg==", // <-- Replace this with your RecruitCRM API key
        },
        body: JSON.stringify(payload),
      });

      console.log("🔹 Status:", response.status);
      const rawText = await response.text();
      console.log("🔹 Raw Response:", rawText);

      let data;
      try {
        data = JSON.parse(rawText);
      } catch (err) {
        console.error("❌ JSON Parse Error:", err);
      }

      if (response.ok) {
        console.log("✅ Candidate Created:", data);
        alert("Candidate submitted successfully!");
      } else {
        console.error("❌ API Error:", data);
        alert("Failed to submit: " + (data?.message || "Unknown error"));
      }
    } catch (error) {
      console.error("⚠️ Fetch Error:", error);
      alert("Network or fetch error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Candidate Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          type="email"
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="organization"
          placeholder="Current Organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="status"
          placeholder="Employment Status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="summary"
          placeholder="Candidate Summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default CandidateProfilePage;
