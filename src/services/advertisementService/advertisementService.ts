import { EditAdvertisement } from './../../pages/EditAdvertisement/EditAdvertisement';
// import { AnyNaptrRecord } from "dns";
import { http } from "../../http/http";
import { IAdvertisement, IAdvertisementResponse } from "./advertisementservice.interface";

export const advertisementService = {
  async createAdvertisement(body: IAdvertisement) {
    return await http.post<IAdvertisementResponse>("/advertisements", body);
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
  // async editAdvertisement(body: IAdvertisement, id: number) {
  async editAdvertisement(body: IAdvertisement, id: string) {
    return await http.put(`/advertisements/${id}`, body)
  }
};