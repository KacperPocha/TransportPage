import React, { useEffect, useState } from "react";

export const ModalTOC = ({ open, onClose }) => {
  const [packagingType, setNewPackagingType] = useState("");
  const [transportType, setNewTransportType] = useState([]);
  const [filters, setNewFilters] = useState([]);

  const handleCheckboxChange = (value) => {
    setNewTransportType((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((type) => type !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const handleCheckbox = (checkboxId) => {
    setNewPackagingType(checkboxId);
  };

  const handleSubmitTOC = (e) => {
    setNewFilters("");
    e.preventDefault();
    onClose();
    const newFilterTOC = {
      packagingType: packagingType,
      transportType: transportType,
    };
    setNewFilters((prevFiltersTOC) => [...prevFiltersTOC, newFilterTOC]);
    setNewPackagingType("");
    setNewTransportType("");
    setNewPackagingType("");
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] bg-white rounded-lg flex flex-col">
        <button
          onClick={() =>
            onClose() & setNewPackagingType("") & setNewTransportType("")
          }
          className="place-self-end text-xl text-black font-bold m-5 hover:scale-125"
        >
          X
        </button>
        <div>
          <h1 className="text-center text-2xl font-bold">Rodzaj opakowania</h1>
          <div className="flex justify-center mt-1">
            <div className="flex items-center mb-4 mt-3 justify-center mt-4 mr-8">
              <input
                onChange={() => handleCheckbox("Paleta")}
                checked={packagingType === "Paleta"}
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
                onChange={() => handleCheckbox("Skrzynia")}
                checked={packagingType === "Skrzynia"}
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
                onChange={() => handleCheckbox("Paczka")}
                checked={packagingType === "Paczka"}
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
                onChange={() => handleCheckbox("Luzem")}
                checked={packagingType === "Luzem"}
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
                  onChange={() => handleCheckboxChange("LTL")}
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
                  onChange={() => handleCheckboxChange("FTL")}
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
                  onChange={() => handleCheckboxChange("Nienormatywne")}
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
                  onChange={() => handleCheckboxChange("ADR")}
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
        <div>
          {packagingType !== "" ? (
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="client"
              >
                Ilość{" "}
                {packagingType === "Paleta"
                  ? "palet"
                  : packagingType === "Skrzynia"
                  ? "skrzyń"
                  : packagingType === "Paczka"
                  ? "paczek"
                  : "luzem"}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="client"
                type="text"
                placeholder="Ilość"
              />
            </div>
          ) : null}
        </div>
        <button
          onClick={handleSubmitTOC}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded h-12 mb-4 mt-3 ml-5 mr-5"
        >
          Gotowe
        </button>
      </div>
    </div>
  );
};
