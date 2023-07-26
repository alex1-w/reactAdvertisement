  import { http } from "../../http/http";
import { IAdvertisement } from "./advertisementservice.interface";

export const advertisementService = {
  async createAdvertisement(body: IAdvertisement) {
    return await http.post<IAdvertisement>("/advertisements", body);
  },
  async getAdvertisements() {
    return await http.get<IAdvertisement[]>('/advertisements')
  }
};
