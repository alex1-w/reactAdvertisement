import { AnyNaptrRecord } from "dns";
import { http } from "../../http/http";
import { IAdvertisement, IAdvertisementResponse } from "./advertisementservice.interface";

export const advertisementService = {
  async createAdvertisement(body: IAdvertisement) {
    return await http.post<AnyNaptrRecord>("/advertisements", body);
  },
  async getAdvertisements() {
    return await http.get<IAdvertisementResponse[]>('/advertisements')
  },
  async getFilteredAdvertisements(id: string) {
    return await http.get<IAdvertisementResponse[]>(`/advertisements/category/${id}`);
  },
  async getAdvertisement(id: string) {
    return await http.get<IAdvertisementResponse>(`/advertisements/${id}`);
  },
};