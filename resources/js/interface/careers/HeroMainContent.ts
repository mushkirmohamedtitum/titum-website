import { IUser } from '../User';

export interface ICareersHeroMainContent {
    id: string;
    hero_main_content: string;
    is_active: 0 | 1;
    created_by: IUser;
    updated_by: IUser;
    created_at: string | Date;
    updated_at: string | Date;
}
