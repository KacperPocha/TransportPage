import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, updatedOrder } from "../api/posts";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import imgLogOut from "../img/logout.png";
import imgFilter from "../img/filter.png";
import { PostList } from "./PostList";
import { ModalTOC } from "./ModalTOC";

export const MainPage = (props) => {
  //Date
  const datePick = (date, newNumber) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + newNumber).toString().padStart(2, "0");

    return `${year}-${month}`;
  };

  //Getting data from other components
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  //Login data
  const [user, setUser] = useState(location.state);
  const email = localStorage.getItem("email");
  const [pathname, setNewPathname] = useState(window.location.pathname);

  //Date
  const date = new Date();
  const [newNumber, setNewNumber] = useState(1);
  const [value, setValue] = useState(new Date());
  const zero = date.getDate() < 10 ? 0 : "";
  const PickDate = datePick(date, newNumber);
  const currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${zero}${date.getDate()}`;
  const currentMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;
  const newMonth = PickDate.charAt(5) + PickDate.charAt(6);

  //Edit page and copy data
  const [editValues, setNewEditValues] = useState(props.order);
  const [copiedData, setNewCopiedData] = useState("");

  //Data from form
  const [newClient, setNewClient] = useState("");
  const [newCarrier, setNewCarrier] = useState("");
  const [newPlaceIn, setNewPlaceIn] = useState("");
  const [newPlaceOut, setNewPlaceOut] = useState("");
  const [roadNumber, setNewRoadNumber] = useState("");
  const [newDateIn, setNewDateIn] = useState("");
  const [newDateOut, setNewDateOut] = useState("");
  const [newWare, setNewWare] = useState("");
  const [newSpace, setNewSpace] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newCarrierPrice, setNewCarrierPrice] = useState("");
  const [income, setNewIncome] = useState(0);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  //Modal, filters
  const [openModal, setOpenModal] = useState(false);
  const [modalFilter, setNewModalFilter] = useState("");
  const [filtrclass, setnewfiltrclass] = useState(
    `flex h-6 ml-3 mt-1 hover:cursor-pointer`
  );
  const filtrClassSmallShow =
    "flex hover:scale-105 bg-blue-400 pr-3 pl-3 rounded-xl ml-3";
  const filtrClassSmallHidden =
    "hidden flex hover:scale-105 bg-blue-400 pr-3 pl-3 rounded-xl ml-3";

  //Modal, TypeOfCarriage
  const [openModalTOC, setOpenModalTOC] = useState(false);
  const [modalDataTOC, setNewModalDataTOC] = useState("");
  const handleCallbackTOC = (dataTOC) => {
    setNewModalDataTOC(dataTOC);
  };


  //Login function
  const handleLogOut = (e) => {
    setUser({});
    localStorage.removeItem("email");
    navigate(`/`, { state: user });
  };

  //Date control
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const minus = () => {
    if (newMonth > 1) {
      setNewNumber((newNumber) => newNumber - 1);
    }
  };

  const add = () => {
    if (newMonth < 12) {
      setNewNumber((newNumber) => newNumber + 1);
    }
  };

  //React query
  const newPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  const updatePostMutation = useMutation({
    mutationFn: updatedOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      navigate("/orders");
    },
  });

  //Form control
  useEffect(() => {
    setNewClient(
      isNaN(pathname === "/edit/" ? editValues.client : copiedData.client) ===
        false
        ? pathname === "/edit/"
          ? editValues.client
          : copiedData.client
        : ""
    );
    setNewCarrier(
      isNaN(pathname === "/edit/" ? editValues.carrier : copiedData.carrier) ===
        false
        ? pathname === "/edit/"
          ? editValues.carrier
          : copiedData.carrier
        : ""
    );
    setNewPlaceIn(
      isNaN(pathname === "/edit/" ? editValues.placeIn : copiedData.placeIn) ===
        false
        ? pathname === "/edit/"
          ? editValues.placeIn
          : copiedData.placeIn
        : ""
    );
    setNewPlaceOut(
      isNaN(
        pathname === "/edit/" ? editValues.placeOut : copiedData.placeOut
      ) === false
        ? pathname === "/edit/"
          ? editValues.placeOut
          : copiedData.placeOut
        : ""
    );
    setNewDateIn(
      isNaN(pathname === "/edit/" ? editValues.dateIn : copiedData.dateIn) ===
        true
        ? pathname === "/edit/"
          ? editValues.dateIn
          : copiedData.dateIn
        : ""
    );
    setNewDateOut(
      isNaN(pathname === "/edit/" ? editValues.dateOut : copiedData.dateOut) ===
        true
        ? pathname === "/edit/"
          ? editValues.dateOut
          : copiedData.dateOut
        : ""
    );
    setNewWare(
      isNaN(pathname === "/edit/" ? editValues.ware : copiedData.ware) === false
        ? pathname === "/edit/"
          ? editValues.ware
          : copiedData.ware
        : ""
    );
    setNewSpace(
      isNaN(pathname === "/edit/" ? editValues.carrier : copiedData.carrier) ===
        false
        ? pathname === "/edit/"
          ? editValues.carrier
          : copiedData.carrier
        : ""
    );
    setNewWeight(
      isNaN(pathname === "/edit/" ? editValues.weight : copiedData.weight) ===
        false
        ? pathname === "/edit/"
          ? editValues.weight
          : copiedData.weight
        : ""
    );
    setNewPrice(
      isNaN(pathname === "/edit/" ? editValues.price : copiedData.price) ===
        false
        ? pathname === "/edit/"
          ? editValues.price
          : copiedData.carrier
        : ""
    );
    setNewCarrierPrice(
      isNaN(
        pathname === "/edit/"
          ? editValues.carrierPrice
          : copiedData.carrierPrice
      ) === false
        ? pathname === "/edit/"
          ? editValues.carrierPrice
          : copiedData.carrierPrice
        : ""
    );
    setSelectedCheckbox(
      isNaN(
        pathname === "/edit/" ? editValues.completed : copiedData.completed
      ) === true
        ? pathname === "/edit/"
          ? editValues.completed
          : copiedData.completed
        : ""
    );
  }, [copiedData, editValues]);

  useEffect(() => {
    setNewIncome(newPrice - newCarrierPrice);
  }, [newPrice, newCarrierPrice]);

  const handleCheckbox = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewClient(value);
  };

  const handleSubmit = (e) => {
    setNewRoadNumber(
      crypto.randomUUID().toString().replace("-", "").substring(0, 17)
    );
    e.preventDefault();
    if (PickDate === currentMonth) {
      newPostMutation.mutate({
        id: roadNumber,
        user: email,
        name: email === "kacper.pocha02@gmail.com" ? "Kacper" : "",
        month: PickDate,
        date: currentDate,
        client: newClient,
        carrier: newCarrier,
        roadNumber: roadNumber,
        placeIn: newPlaceIn,
        placeOut: newPlaceOut,
        dateIn: newDateIn,
        dateOut: newDateOut,
        packageNumber: modalDataTOC[0].packageNumber !== undefined ? modalDataTOC[0].packageNumber : "",
        packageLength: modalDataTOC[0].packageLength !== undefined? modalDataTOC[0].packageLength: "",
        packageWidth: modalDataTOC[0].packageWidth !== undefined ? modalDataTOC[0].packageWidth: "",
        PalletsHeight: modalDataTOC[0].packageHeight !== undefined ? modalDataTOC[0].packageHeight: "",
        ware: newWare,
        space: newSpace,
        weight: newWeight,
        price: newPrice,
        carrierPrice: newCarrierPrice,
        income: income,
        completed: selectedCheckbox,
      });
    } else {
      alert("Dodajesz zlecenie w innym miesiącu!");
    }
    clear();
  };

  //Modal, filters
  const handleCallback = (filters) => {
    setNewModalFilter(filters);
  };

  const clearModalFilter = (filterClear) => {
    modalFilter[0][filterClear] = "";
  };

  //Modal TypeOfCarriage

  //Copying function
  const copyData = (copyData) => {
    setNewCopiedData(copyData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Edit data function
  const handleEdit = () => {
    console.log("edit");
    updatePostMutation.mutate({
      id: editValues.id,
      user: email,
      month: PickDate,
      date: currentDate,
      client: newClient,
      carrier: newCarrier,
      placeIn: newPlaceIn,
      placeOut: newPlaceOut,
      roadNumber: editValues.roadNumber,
      dateIn: newDateIn,
      dateOut: newDateOut,
      packageNumber: modalDataTOC[0].packageNumber,
      packageLength: modalDataTOC[0].packageLength,
      packageWidth: modalDataTOC[0].packageWidth,
      PalletsHeight: modalDataTOC[0].packageHeight,
      ware: newWare,
      space: newSpace,
      weight: newWeight,
      price: newPrice,
      carrierPrice: newCarrierPrice,
      income: income,
      completed: selectedCheckbox,
    });
    navigate("/orders");
  };

  //Clean form function
  const clear = (e) => {
    setNewClient("");
    setNewCarrier("");
    setNewPlaceIn("");
    setNewPlaceOut("");
    setNewDateIn("");
    setNewDateOut("");
    setNewWare("");
    setNewSpace("");
    setNewWeight("");
    setNewPrice("");
    setNewCarrierPrice("");
    setSelectedCheckbox("");
    setNewCopiedData("");
  };

  return (
    <>
      <div className="w-full">
        <div className="h-10 bg-blue-600 sticky top-0 z-40 flex">
          <span className="mt-1  ml-3 font-bold text-2xl grow">
            {date.toLocaleTimeString()}
          </span>

          <button onClick={handleLogOut}>
            <img src={imgLogOut} alt="image" className="mr-2 hover:scale-125" />
          </button>
          <h1 className="mr-4 mt-2 font-medium">
            {localStorage.getItem("email")}
          </h1>
        </div>
        <form
          onSubmit={pathname === "/edit/" ? handleEdit : handleSubmit}
          className="flex bg-blue-500 bg-opacity-60"
        >
          <div className="w-full mt-3 mb-5 grid grid-cols-7 ml-3 mr-1">
            <div className="w-full px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="client"
              >
                Klient
              </label>
              <input
                value={newClient}
                onChange={handleInputChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="client"
                type="text"
                placeholder="Klient"
              />
            </div>
            <div className="w-full px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="carrier"
              >
                Przewoźnik
              </label>
              <input
                value={newCarrier}
                onChange={(e) => setNewCarrier(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="carrier"
                type="text"
                placeholder="Przewoźnik"
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
                value={newPlaceIn}
                onChange={(e) => setNewPlaceIn(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="InPlace"
                type="text"
                placeholder="Miejsce załadunku"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="OutPlace"
              >
                Miejsce rozładunku
              </label>
              <input
                value={newPlaceOut}
                onChange={(e) => setNewPlaceOut(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="OutPlace"
                type="text"
                placeholder="Miejsce rozładunku"
              />
            </div>

            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="DateIn"
              >
                Data załadunku
              </label>
              <input
                value={newDateIn}
                onChange={(e) => setNewDateIn(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="DateIn"
                type="date"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="DateOut"
              >
                Data rozładunku
              </label>
              <input
                value={newDateOut}
                onChange={(e) => setNewDateOut(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="DateOut  "
                type="date"
              />
            </div>

            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="ware"
              >
                Towar
              </label>
              <input
                value={newWare}
                onChange={(e) => setNewWare(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="ware"
                type="text"
                placeholder="Towar"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="space"
              >
                Ldm
              </label>
              <input
                value={newSpace}
                onChange={(e) => setNewSpace(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="space"
                type="number"
                placeholder="Ldm"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="weight"
              >
                Waga [t]
              </label>
              <input
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="weight"
                type="number"
                placeholder="Waga"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="price"
              >
                Cena [zł]
              </label>

              <input
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="price"
                type="number"
                placeholder="Cena"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="CarrierPrice"
              >
                Cena przewoźnika [zł]
              </label>
              <input
                value={newCarrierPrice}
                onChange={(e) => setNewCarrierPrice(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="CarrierPrice"
                type="number"
                placeholder="Cena przewoźnika"
              />
            </div>
            <div className="w-full  px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="income"
              >
                Zysk [zł]
              </label>
              <input
                readOnly
                value={isNaN(income) === true ? 0 : income}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="income"
                type="text"
                placeholder="Zysk"
              />
            </div>
            {pathname === "/edit/" ? (
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="roadNumber"
                >
                  Numer trasy
                </label>
                <input
                  value={pathname === "/edit/" ? editValues.roadNumber : ""}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="roadNumber"
                  type="text"
                  placeholder="Numer trasy"
                  disabled
                />
              </div>
            ) : null}
            <button
              className="col-span-1 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold mr-3 rounded-lg h-9 ml-3"
              onClick={() => setOpenModalTOC(true)}
              type="button"
            >
              Sposób przewozu
            </button>

            <ModalTOC
              open={openModalTOC}
              onClose={() => setOpenModalTOC(false)}
              handleCallbackTOC={handleCallbackTOC}
            />

            <button
              className="col-span-1 mt-3 bg-orange-500 hover:bg-orange-700 text-white font-bold px-5 mr-3 rounded-lg h-9 ml-3"
              onClick={clear}
              type="button"
            >
              Czyść
            </button>

            <div className="flex items-center mb-4 mt-3 justify-center mt-4">
              <input
                onChange={() => handleCheckbox("Na czas")}
                checked={selectedCheckbox === "Na czas"}
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Na czas
              </label>
            </div>
            <div className="flex items-center mb-4 mt-3 justify-center mt-4">
              <input
                onChange={() => handleCheckbox("Spóźniony")}
                checked={selectedCheckbox === "Spóźniony"}
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Spóźniony
              </label>
            </div>
            <div className="flex items-center mb-4 mt-3 justify-center mt-4">
              <input
                onChange={() => handleCheckbox("Anulowane")}
                checked={selectedCheckbox === "Anulowane"}
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 block uppercase tracking-wide text-gray-700 text-md font-bold"
              >
                Anulowane
              </label>
            </div>

            <button
              onClick={pathname === "/edit/" ? handleEdit : handleSubmit}
              type="submit"
              className="col-end-7 rounded-lg ml-3 col-start-1 mt-2 focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-red-300 text-white font-bold py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              {pathname === "/edit/"
                ? "Aktualizuj"
                : newPostMutation.isLoading
                ? "Dodawanie"
                : "Dodaj"}
            </button>
          </div>
        </form>
        {pathname === "/orders" ? (
          <div>
            <button
              className="absolute  mt-1 ml-3 text-lg cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <img
                src={imgFilter}
                alt="filter"
                className="mt-1 hover:scale-110 ml-1"
              />
            </button>

            <div className="flex h-10 bg-blue-500 justify-center">
              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                handleCallback={handleCallback}
              />

              <div className="flex">
                <button className="" onClick={minus}>
                  &#8592;
                </button>
                <p className="pt-2 font-bold text-lg ml-5 mr-5">{PickDate}</p>
                <button className="" onClick={add}>
                  &#8594;
                </button>
              </div>
            </div>

            <div className={filtrclass}>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].clientFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p className="">
                  {modalFilter.length !== 0
                    ? modalFilter[0].clientFilter
                    : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("clientFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].clientFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].carrierFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p>
                  {modalFilter.length !== 0
                    ? modalFilter[0].carrierFilter
                    : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("carrierFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].carrierFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].roadNumberFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p>
                  {modalFilter.length !== 0
                    ? modalFilter[0].roadNumberFilter
                    : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("roadNumberFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].roadNumberFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].nameFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p>
                  {modalFilter.length !== 0 ? modalFilter[0].nameFilter : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("nameFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].nameFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].placeOutFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p>
                  {modalFilter.length !== 0
                    ? modalFilter[0].placeOutFilter
                    : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("placeOutFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].placeOutFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].placeInFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p>
                  {modalFilter.length !== 0
                    ? modalFilter[0].placeInFilter
                    : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("placeInFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].placeInFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
              <div
                className={
                  modalFilter.length !== 0
                    ? modalFilter[0].dateFilter !== ""
                      ? filtrClassSmallShow
                      : filtrClassSmallHidden
                    : null
                }
              >
                <p>
                  {modalFilter.length !== 0 ? modalFilter[0].dateFilter : null}
                </p>
                <button
                  onClick={(e) => clearModalFilter("dateFilter")}
                  className="ml-3 mb-1"
                >
                  {modalFilter.length !== 0
                    ? modalFilter[0].dateFilter !== ""
                      ? "X"
                      : null
                    : null}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-500 h-10 w-full hover:text-xl"
            onClick={() => navigate("/orders") & setNewEditValues("")}
          >
            Wróć
          </button>
        )}
        {pathname === "/orders" ? (
          <PostList
            modalFilter={modalFilter}
            PickDate={PickDate}
            copyData={copyData}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default MainPage;
