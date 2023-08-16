import { http } from "../../http/http";
import { IAdvertisement, IAdvertisementResponse } from "../advertisementService/advertisementservice.interface";
import { IUserInfo, IUserService } from "./IUserService";

export const userService = {
  async registration(body: IUserService) {
    return await http.post<IUserService>("/user/registration", body);
  },

  async authenticate(body: IUserService) {
    return await http.post<{ id: number, token: string }>("/user/authentication", body);
  },
  async getUserAdvertisement() {
    return await http.get<IAdvertisementResponse[]>("/user/advertisements");
  },
  async getUserInfo() {
    return await http.get<IUserInfo>('/user/user-info')
  },
  async changePassword(password: string) {
    return await http.put('/user/change-password', password);
  }
};

