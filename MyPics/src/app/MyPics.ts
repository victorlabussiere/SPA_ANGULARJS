export interface MyPics {
    id?: number,
    title: string,
    description: string,
    picture: string,
    created_at?: string,
    updated_at?: string
    comments?: [{ text: string, username: string }]
}