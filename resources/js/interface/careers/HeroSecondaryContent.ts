import { IUser } from '../User';

export interface ICareerHeroSecondaryContent {
    id: string;
    content: string;
    is_active: 0 | 1 | null;
    created_by: IUser | null;
    updated_by: IUser | null;
    created_at: string;
    updated_at: string;
}
