export interface Query {
    sort: string,
    sortAsc: boolean,
    page: number,
    size: number,
    deep: number 
}

export const defaultQuery: Query = {
    sort: 'id',
    sortAsc: false,
    page: 0,
    size: 0,
    deep: 0
}