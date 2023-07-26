import { ICategoryOption } from "../data/categories.data"
import { http } from "../http/http"

export const categoryService = {
    async getCategories() {
        return await http.get('/categories')
    }
}