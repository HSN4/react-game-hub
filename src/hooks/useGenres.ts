import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useDate from "./useDate";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}



const useGenres = () => useDate<Genre>('/genres')

export default useGenres;