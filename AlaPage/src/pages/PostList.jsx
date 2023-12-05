import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPost } from "../api/posts";
import {useNavigate } from "react-router-dom";


export const PostList = (props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  //React query
  const postQuery = useQuery({
    queryKey: ["orders"],
    queryFn: fetchPost,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });
  
  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <h1>Error</h1>;

  const handelDelete = (id) => {
    deletePostMutation.mutate(id);
  };


  return (
    <ul>
      {postQuery.data
        .filter((order) =>
          props.modalFilter.length === 0
            ? order.month.includes(props.PickDate) 
            : order.date.includes(props.modalFilter[0].dateFilter) &&
              order.client.includes(props.modalFilter[0].clientFilter) &&
              order.carrier.includes(props.modalFilter[0].carrierFilter) &&
              order.roadNumber.includes(props.modalFilter[0].roadNumberFilter) &&
              order.name.includes(props.modalFilter[0].nameFilter) &&
              order.placeIn.includes(props.modalFilter[0].placeInFilter) &&
              order.placeOut.includes(props.modalFilter[0].placeOutFilter)
        )
        .map((orders) => (
          <li
            key={orders.id}
            className={
              orders.completed === "cancel"
                ? "bg-[#fd5c63]"
                : orders.completed === "onTime"
                ? "bg-[#03C03C]"
                : orders.completed === "late"
                ? "bg-[#FFC000]"
                : "bg-white"
            }
          >
            <div className="mt-3 mb-2 h-10 bg-blue-600 text-center place-content-center">
              <div className="flex absolute">
                <p className="mt-2 ml-2 bg-blue-400 px-2 rounded-xl">
                  {orders.roadNumber}
                </p>
                <p className="mt-2 ml-2 bg-blue-400 px-2 rounded-xl">
                  {orders.name}
                </p>
              </div>
              <div>
                <p className="pt-1 font-bold text-lg grow">{orders.date}</p>
              </div>
            </div>
            <div className="grid grid-cols-5  ml-3 mr-4">
              <div className="w-full px-3 mr-2">
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
                  className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.client}
                  disabled
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
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.carrier}
                  disabled
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
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.placeIn}
                  disabled
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
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.placeOut}
                  disabled
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
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.dateIn}
                  disabled
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
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.dateOut}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="PalletsNumber"
                >
                  Ilość palet
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.palletsNumber}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="PalletsLength"
                >
                  Długość palet
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.palletsLength}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="PalletsWidth"
                >
                  Szerokość palet
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.palletsWidth}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="PalletsHeight"
                >
                  Wysokość palet
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.PalletsHeight}
                  disabled
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
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.ware}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="space"
                >
                  LDM
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.space}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="weight"
                >
                  Waga
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.weight}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Wycena
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.price}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="CarrierPrice"
                >
                  Cena dla przewoźnika
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.carrierPrice}
                  disabled
                />
              </div>
              <div className="w-full  px-3 mb-2 mr-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="income"
                >
                  Zarobek
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mr-3 mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={orders.income}
                  disabled
                />
              </div>

              <div className="flex items-center mb-3 justify-center mt-4">
                <input
                  disabled
                  checked={orders.completed === "onTime" ? true : false}
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
              <div className="flex items-center mb-3 justify-center mt-4">
                <input
                  disabled
                  checked={orders.completed === "late" ? true : false}
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
              <div className="flex items-center mb-3 justify-center mt-4">
                <input
                  disabled
                  checked={orders.completed === "cancel" ? true : false}
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
              <div className="flex mr-1 ml-3 mt-2">
                <button
                  type="button"
                  onClick={() => navigate(`/edit/`, { state: orders })}
                  className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-6 mt-4  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Edytuj
                </button>
                <button
                  type="button"
                  onClick={() => props.copyData(orders)}
                  className="w-full focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-6 mt-4  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Kopiuj
                </button>
              </div>
              <button
                onClick={() => handelDelete(orders.id)}
                type="button"
                className="col-end-6 col-start-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                {deletePostMutation.isLoading ? "Usuwanie" : "Usuń"}
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default PostList;
