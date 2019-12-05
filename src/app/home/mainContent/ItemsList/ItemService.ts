import { fetchJson } from "../../../../common/utils/apiUtils";

export const itemService = {
    fetchAllItems: () => fetchJson(`items`, {}),
    fetchImages: (url: string) => fetchJson(url),
    fetchItem: (id: string) => fetchJson(`items/${id}`)
}