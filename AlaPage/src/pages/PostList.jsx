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
              <div className="flex absolute ">
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
            <div className="flex ml-3">
              <div className="w-32">
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
                  value={orders.completed}
                  disabled
                />
              </div>
              <div className="ml-10 w-60">
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
                  value={orders.client}
                  disabled
                />
              </div>
              <div className="ml-10">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="DateIn"
              >
                Data załadunku
              </label>
              <input
                value={orders.dateIn}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="DateIn"
                type="date"
                disabled
              />
            </div>
            <div className="">
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
                  value={orders.placeIn}
                  disabled
                />
              </div>
              <div className="w-32">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="client"
                >
                  Kraj
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
           
                  disabled
                />
              </div>
              <div className="w-32">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="client"
                >
                  Kod
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 
                  disabled
                />
              </div>
              <div className="ml-10">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="DateIn"
              >
                Data rozładunku
              </label>
              <input
                value={orders.dateOut}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="DateIn"
                type="date"
                disabled
              />
            </div>
            <div className="">
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
                  value={orders.placeOut}
                  disabled
                />
              </div>
              <div className="w-32">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="client"
                >
                  Kraj
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
                  disabled
                />
              </div>
              <div className="w-32">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="client"
                >
                  Kod
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
                  disabled
                />
              </div>
              <div className="flex mr-1 ml-8 mt-2">
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
             
            </div>
            <button
                onClick={() => handelDelete(orders.id)}
                type="button"
                className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                {deletePostMutation.isLoading ? "Usuwanie" : "Usuń"}
              </button>
          </li>
        ))}
    </ul>
  );
};
export default PostList;
