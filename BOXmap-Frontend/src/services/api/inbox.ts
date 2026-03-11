const BASE = 'https://jsonplaceholder.typicode.com'

export interface JPUser {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    address: { street: string; suite: string; city: string; zipcode: string }
    company: { name: string }
}

export interface JPPost {
    id: number
    userId: number
    title: string
    body: string
}

export interface JPComment {
    id: number
    postId: number
    name: string
    email: string
    body: string
}

export async function fetchUsers(): Promise<JPUser[]> {
    const res = await fetch(`${BASE}/users`)
    if (!res.ok) throw new Error('Failed to fetch users')
    return res.json()
}

export async function fetchUser(id: number): Promise<JPUser> {
    const res = await fetch(`${BASE}/users/${id}`)
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json()
}

export async function fetchPosts(limit = 9): Promise<JPPost[]> {
    const res = await fetch(`${BASE}/posts?_limit=${limit}`)
    if (!res.ok) throw new Error('Failed to fetch posts')
    return res.json()
}

export async function fetchComments(postId = 1, limit = 8): Promise<JPComment[]> {
    const res = await fetch(`${BASE}/comments?postId=${postId}&_limit=${limit}`)
    if (!res.ok) throw new Error('Failed to fetch comments')
    return res.json()
}
