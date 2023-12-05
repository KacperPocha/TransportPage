import React, { useEffect, useState } from "react";



export const Modal = ({ open, onClose, handleCallback }) => {
  const [clientFilter, setNewClientFilter] = useState("");
  const [carrierFilter, setNewCarrierFilter] = useState("");
  const [roadNumberFilter, setNewRoadNumberFilter] = useState("");
  const [nameFilter, setNewNameFilter] = useState("");
  const [placeOutFilter, setNewPlaceOutFilter] = useState("");
  const [placeInFilter, setNewPlaceInFilter] = useState("");
  const [dateFilter, setNewDateFilter] = useState("");
  const [filters, setNewFilters] = useState([]);

  const handleSubmit = (e) => {
    setNewFilters("")
    e.preventDefault();
    onClose();
    const newFilter = {
      clientFilter: clientFilter,
      carrierFilter: carrierFilter,
      roadNumberFilter: roadNumberFilter,
      nameFilter: nameFilter,
      placeOutFilter: placeOutFilter,
      placeInFilter: placeInFilter,
      dateFilter: dateFilter,
    }
    setNewFilters((prevFilters) => [...prevFilters, newFilter]);
    setNewClientFilter("");
    setNewCarrierFilter("");
    setNewRoadNumberFilter("");
    setNewNameFilter("");
    setNewPlaceOutFilter("");
    setNewPlaceInFilter("");
    setNewDateFilter("");
  };
  useEffect (() => {
    handleCallback(filters)
  },[filters])


  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] bg-white rounded-lg flex flex-col">
        <button
          onClick={() => onClose()}
          className="place-self-end text-xl text-black font-bold m-5 hover:scale-125"
        >
          X
        </button>
        <div className="w-full  px-3 mb-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Klient
          </label>
          <input
            value={clientFilter}
            onChange={(e) => setNewClientFilter(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="client"
            type="text"
            placeholder="Klient"
          />
        </div>
        <div className="w-full  px-3 mb-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="carrier"
          >
            Przewoźnik
          </label>
          <input
            value={carrierFilter}
            onChange={(e) => setNewCarrierFilter(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="carrier"
            type="text"
            placeholder="Przewoźnik"
          />
        </div>
        <div className="w-full  px-3 mb-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="roadNumber"
          >
            Numer trasy
          </label>
          <input
            value={roadNumberFilter}
            onChange={(e) => setNewRoadNumberFilter(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="roadNumber"
            type="text"
            placeholder="Numer trasy"
          />
        </div>
        <div className="w-full  px-3 mb-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Osoba odpowiedzialna
          </label>
          <input
            value={nameFilter}
            onChange={(e) => setNewNameFilter(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Osoba odpowiedzialna"
          />
        </div>
        <div className="w-full  px-3 mb-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="outPlace"
          >
            Miejsce rozładunku
          </label>
          <input
            value={placeOutFilter}
            onChange={(e) => setNewPlaceOutFilter(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="outPlace"
            type="text"
            placeholder="Miejsce rozładunku"
          />
        </div>
        <div className="w-full  px-3 mb-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="InPlace"
          >
            Miejsce załadunku
          </label>
          <input
            value={placeInFilter}
            onChange={(e) => setNewPlaceInFilter(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="InPlace"
            type="text"
            placeholder="Miejsce załadunku"
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="DateOut"
          >
            Data
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="DateOut"
            type="date"
            onChange={(e) => setNewDateFilter(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded h-12 mb-4 mt-3 ml-5 mr-5"
        >
          Filtruj
        </button>
      </div>
    </div>
  );
};
