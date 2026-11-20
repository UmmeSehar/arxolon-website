import React, { useEffect, useState } from 'react';
import { RefreshCw, Users, ShieldCheck } from 'lucide-react';

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/leads');
      const data = await res.json();
      if (data.success) setLeads(data.leads);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-arxBlue uppercase">
              <ShieldCheck className="w-4 h-4" /> Arxolon Admin Portal
            </span>
            <h1 className="text-3xl font-extrabold text-arxNavy">Client Inquiries & Leads ({leads.length})</h1>
          </div>
          <button
            onClick={fetchLeads}
            className="bg-arxNavy text-white px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-arxBlue transition"
          >
            <RefreshCw className="w-4 h-4" /> Refresh Leads
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
          {loading ? (
            <p className="p-8 text-center text-slate-500 font-semibold">Loading database records...</p>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-bold">No inquiries submitted yet.</p>
              <p className="text-xs text-slate-400 mt-1">Submit a test form on the Contact page to see it appear here live.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-arxNavy text-white text-xs uppercase tracking-wider">
                  <th className="p-4">ID</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Budget</th>
                  <th className="p-4">Website / Message</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-arxBlue">{lead.id}</td>
                    <td className="p-4">
                      <p className="font-bold text-arxNavy">{lead.name}</p>
                      <p className="text-xs text-slate-500">{lead.email} • {lead.phone}</p>
                    </td>
                    <td className="p-4 font-semibold text-arxNavy">{lead.service}</td>
                    <td className="p-4">
                      <span className="bg-cyan-50 text-arxBlue text-xs font-bold px-2.5 py-1 rounded-full">
                        {lead.budget}
                      </span>
                    </td>
                    <td className="p-4 max-w-xs">
                      <p className="text-xs font-bold text-slate-700">{lead.website}</p>
                      <p className="text-xs text-slate-500 truncate">{lead.message}</p>
                    </td>
                    <td className="p-4 text-xs text-slate-400">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}