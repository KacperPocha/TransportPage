import React, { useEffect, useState } from "react";

export const ModalTOC = ({ open, onClose }) => {
  const [clientFilter, setNewClientFilter] = useState("");
  const [filters, setNewFilters] = useState([]);

  const handleSubmit = (e) => {
    setNewFilters("");
    e.preventDefault();
    onClose();
    const newFilter = {
      clientFilter: clientFilter,
    };
    setNewFilters((prevFilters) => [...prevFilters, newFilter]);
    setNewClientFilter("");
  };

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
        <div>
          <h1 className="text-center text-2xl font-bold">Rodzaj opakowania</h1>
          <div className="flex justify-center mt-1">
            <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
              <input
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Paleta
              </label>
            </div>
            <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
              <input
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Skrzynia
              </label>
            </div>
            <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
              <input
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Paczka
              </label>
            </div>
            <div className="flex items-center mb-4 mt-3 justify-center mt-4">
              <input
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Luzem
              </label>
            </div>
          </div>
          <div className="mt-6 mb-4">
            <h1 className="text-center text-2xl font-bold">
              Rodzaj transportu
            </h1>
            <div className="flex justify-center mt-1">
              <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
                >
                  LTL
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
                >
                  Ftl
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
                >
                  Nienormatywne
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3 justify-center mt-4">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-1 block uppercase tracking-wide text-gray-700 text-md font-bold"
                >
                  Adr
                </label>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
