const rootpath = '/api/';
const fetchWrapper = (method: string, ) => async(
    url: string,
    init: any = {}
):Promise<any> => {
    const response = await fetch(rootpath + url,  {...init, method, url});
    if (!response.ok){
        return new Error(response.status.toString());
    } 

    try {
        return await response.json();
    }
    catch (e) {
        return null;
    }
}

export const fetchJson = fetchWrapper('GET');
export const postJson = fetchWrapper('POST');