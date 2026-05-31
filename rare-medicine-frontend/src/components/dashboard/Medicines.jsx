// src/components/dashboard/Medicines.jsx
import React, { useEffect, useState } from "react";
import { medicineApi } from "../../api.js";

export default function Medicines() {
  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMedicines() {
      try {
        const data = await medicineApi.list();
        setMedicines(data);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchMedicines();
  }, []);

  return (
    <div>
      {/* Header section with stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Medicines Catalog</h2>
          <p className="text-xs text-slate-500 mt-1 font-medium">Verify stock level and therapeutic classification of critical medicine inventory</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-slate-700">Catalog Size: {medicines.length} entries</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-xs font-medium flex items-start gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {medicines.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-slate-50 border border-slate-200/80 border-dashed rounded-2xl text-center">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200 mb-3 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </div>
          <p className="text-slate-700 font-bold text-sm">No registered therapeutics</p>
          <span className="text-xs text-slate-400 mt-1 font-medium">There are currently no items logged in the facility inventory database.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((med) => (
            <div
              key={med._id}
              className="bg-white border border-slate-200/80 hover:border-slate-300 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-150 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 uppercase tracking-wide">
                    {med.category}
                  </span>
                  
                  {/* Stock Level Badge */}
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold ${
                    med.quantity > 5 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                      : med.quantity > 0 
                      ? 'bg-amber-50 text-amber-700 border border-amber-100' 
                      : 'bg-rose-50 text-rose-700 border border-rose-100'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      med.quantity > 5 ? 'bg-emerald-500' : med.quantity > 0 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}></span>
                    {med.quantity > 5 ? 'Adequate' : med.quantity > 0 ? 'Low Stock' : 'Out of Stock'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors mb-1">
                  {med.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Available Inventory</span>
                <span className="text-xs font-bold text-slate-700">
                  {med.quantity} unit{med.quantity !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
