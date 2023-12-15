import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Order = () => {
  const location = useLocation();
  const order = location.state;
  const navigate = useNavigate();
  console.log(order);

  return (
    <div className="bg-blue-400">
      <div className="mb-2 h-10 bg-blue-600 text-center place-content-center">
        <div className="flex absolute ">
          <p className="mt-2 ml-2 bg-blue-400 px-2 rounded-xl">
            {order.roadNumber}
          </p>
          <p className="mt-2 ml-2 bg-blue-400 px-2 rounded-xl">{order.name}</p>
        </div>
        <div>
          <p className="pt-1 font-bold text-lg grow">{order.date}</p>
        </div>
      </div>
      <div className="flex ml-3 grid grid-cols-7">
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Status
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.completed}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Klient
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.client}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Przewoźnik
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.carrier}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="DateIn"
          >
            Data załadunku
          </label>
          <input
            value={order.dateIn}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="DateIn"
            type="date"
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Miejsce załadunku
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.placeIn}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Kraj
          </label>
          <input
            value={order.countryIn}
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Kod
          </label>
          <input
            value={order.codeIn}
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="DateIn"
          >
            Data rozładunku
          </label>
          <input
            value={order.dateOut}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="DateIn"
            type="date"
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Miejsce rozładunku
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.placeOut}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Kraj
          </label>
          <input
            value={order.countryOut}
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Kod
          </label>
          <input
            value={order.codeOut}
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Ilość opakowań [szt]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.packageNumber}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Długość [cm]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.packageLength}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Wysokość [cm]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.packageHeight}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Szerokość [cm]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.packageWidth}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Towar
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.ware}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            LDM
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.space}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Waga [t]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.weight}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Cena [zł]
          </label>
          <input
            type="number"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.price}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Cena przewoźnika [zł]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.carrierPrice}
            disabled
          />
        </div>
        <div className="mr-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Zysk [zł]
          </label>
          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={order.income}
            disabled
          />
        </div>
        <div className="mr-5 col-span-7">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="client"
          >
            Uwagi
          </label>
          <textarea
            className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            disabled
            value={order.comment}
          />
        </div>
      </div>
      <button
            className="block uppercase tracking-wide text-gray-700 text-md font-bold bg-blue-500 h-10 w-full hover:text-xl mt-3"
            onClick={() => navigate(`/orders`)}
          >
            Wróć
          </button>
    </div>
  );
};
