export interface IUser {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | Date | null;
    password: string;
    role_code: number;
    remember_token: string | null;
    is_active: 0 | 1;
    created_at: string | Date;
    updated_at: string | Date;
}
