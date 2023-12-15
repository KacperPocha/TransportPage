import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchPosts, updatedOrder} from "../api/posts";
import { MainPage } from "./MainPage";


export const EditPage = () => {
  const location = useLocation()
  const order = location.state
  console.log(order)

  return (
    <div>
        <MainPage order={order} />
    </div>
    
  );
};
