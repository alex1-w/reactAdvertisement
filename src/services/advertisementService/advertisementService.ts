import { enqueueSnackbar } from "notistack";
import { http } from "../../http/http";
import { IAdvertisement } from "./advertisementservice.interface";

export const advertisementService = {
  async createAdvertisement(body: any) {    
    return await http.post<IAdvertisement>("/advertisement", body);
  },
};
