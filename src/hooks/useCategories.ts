import { useQuery } from "react-query"
import { categoryService } from "../services/categoryService/categoryService"


export const useCategories = () => {
    return useQuery(
        ['categories'],
        () => categoryService.getCategories(),
    )
}