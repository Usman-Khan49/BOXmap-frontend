export type ConversationItem = {
    id: number
    name: string
    initial: string
    avatarColor: string
    lastMessage: string
    time: string
}

export type Message = {
    id: number
    sender: "customer" | "agent"
    text: string
    time: string
    delivered?: boolean
}

export type UserItem = {
    name: string
    count?: number
}

export type ChannelItem = {
    name: string
    platform: "whatsapp" | "instagram"
}

export type Label = {
    name: string
    color: string
    bgColor: string
}

export type NoteItem = {
    text: string
}

export type OtherChatItem = {
    platform: string
    platformColor: string
    date: string
    lastMessage: string
}
