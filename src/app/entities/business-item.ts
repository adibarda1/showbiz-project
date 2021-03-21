export interface BusinessItem {
    id: number;
    uid: string;
    name: string;
    nickname: string;
    email: string;
    owner_uid: string;
    phone: string;
    created_at: string;
    last_seen: string;
    photo: string;
    tags: any[]
    blocked: boolean;
    plan: string;
    staff: string;
    store_pii: boolean;
    template: boolean;  
}

