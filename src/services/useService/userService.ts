import { http } from "../../http/http";
import { IUserService } from "./IUserService";

export const userService = {
  async registration(body: IUserService) {
    return await http.post<IUserService>("/user/registration", body);
  },
};
