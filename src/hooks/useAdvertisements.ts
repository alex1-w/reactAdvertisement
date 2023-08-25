import { useQuery } from "react-query";
import { advertisementService } from "../services/advertisementService/advertisementService";

export const useAdvertisements = () => {

    return  useQuery(
        ['advertisements'],
        () => advertisementService.getAdvertisements(),
    )

}