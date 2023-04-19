import useDate from "./useDate";
import { Platform } from "./useGames";





const usePlatform = () => useDate<Platform>('/platforms/lists/parents')

export default usePlatform;