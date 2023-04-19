import useDate from "./useDate";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}



const usePlatform = () => useDate<Platform>('/platforms/lists/parents')

export default usePlatform;