import React, { useEffect, useState } from 'react';

export default function CandidatePage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const API_KEY = 'mFFkH1qjhhW4YK0QCUVA9EkPdd93iT_WFHMC3wRHvMmuk692MIBJuEl_iZXizncLcRdFGS3L8CDz6CzOzLqPHF8xNzU0NDI3Nzk4Onw6cHJvZHVjdGlvbg==';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://api.recruitcrm.io/v1/jobs', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await response.json();
        if (data && data.data) {
          setJobs(data.data);
          setFilteredJobs(data.data);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    let results = jobs;

    if (searchTerm.trim() !== '') {
      results = results.filter((job) =>
        job.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation) {
      results = results.filter(
        (job) =>
          job.city &&
          job.city.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    if (selectedCategory) {
      results = results.filter(
        (job) =>
          job.job_category &&
          job.job_category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    setFilteredJobs(results);
  }, [searchTerm, selectedLocation, selectedCategory, jobs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setTimeout(() => setIsSubmitted(true), 500);
  };

  const uniqueLocations = [...new Set(jobs.map((j) => j.city).filter(Boolean))];
  const uniqueCategories = [...new Set(jobs.map((j) => j.job_category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 tracking-tighter mb-4">
            Candidate Hub
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Explore Opportunities at Chiparama & Our Partner Companies
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Build your profile and apply to roles that match your skills.
            Enter your email below to get job alerts and updates.
          </p>

          {isSubmitted ? (
            <div className="bg-green-700/20 text-green-300 p-4 rounded-xl border border-green-600 inline-block">
              <p className="font-semibold">
                Thank you! You'll receive updates about new job openings.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                className="flex-grow md:w-96 p-4 rounded-xl border-2 border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 font-bold rounded-xl text-lg text-gray-900 bg-cyan-400 hover:bg-cyan-300 transition-colors duration-300 shadow-lg shadow-cyan-500/30 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
          {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
        </div>

        {/* 🔍 Minimal Filter Bar */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl px-6 py-5 mb-14 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              placeholder="🔎 Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            >
              <option value="">🌍 All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            >
              <option value="">🗂️ All Categories</option>
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 🧾 Job Listings */}
        <div className="border-t border-gray-800 pt-10">
          <h3 className="text-3xl font-bold mb-8 text-cyan-400">Open Positions</h3>

          {loading ? (
            <p className="text-gray-400">Loading available jobs...</p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-gray-500">
              No jobs match your filters. Try adjusting your search.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-900 rounded-2xl border border-gray-800 p-6 shadow-md hover:shadow-cyan-400/10 transition-all"
                >
                  <h4 className="text-2xl font-semibold mb-2 text-white">
                    {job.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-1">
                    <span className="font-medium">Company:</span>{' '}
                    {job.targetcompanies?.[0]?.name || 'Chiparama'}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    <span className="font-medium">Location:</span>{' '}
                    {job.city || 'Not specified'}
                  </p>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    {job.note_for_candidates || 'View details for more information.'}
                  </p>
                  <a
                    href={job.application_form_url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
