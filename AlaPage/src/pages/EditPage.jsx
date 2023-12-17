import { useLocation } from "react-router-dom";
import { MainPage } from "./MainPage";

export const EditPage = () => {
  const location = useLocation()
  const order = location.state;
  console.log(order);

  return (
    <div>
      <MainPage order={order} />
    </div>
  );
};
