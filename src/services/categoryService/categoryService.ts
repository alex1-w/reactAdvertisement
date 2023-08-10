// import { ICategoryOption } from "../data/categories.data"
import { http } from "../../http/http"
import { ICategory, ICreateCategory } from "./ICategory"

export const categoryService = {
    async getCategory(id: string) {
        return await http.get<ICategory>(`/categories/${id}`)
    },
    async getCategories() {
        return await http.get<ICategory[]>('/categories')
    },
    async createCategory(body: ICreateCategory) {
        return await http.post<ICategory>('/categories', body)
    },
}