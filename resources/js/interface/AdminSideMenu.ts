export interface ILevelOneNavigation {
    id?: number;
    label?: string;
    path?: string;
    icons?: string | null;
    order?: number;
    main_navigation_id?: number;
    is_active?: number;
    created_at?: string;
    updated_at?: string;
}

export interface IMainNavigation {
    id?: number;
    label?: string;
    path?: string;
    icons?: string | null;
    order?: number;
    is_active?: number;
    created_at?: string;
    updated_at?: string;
    level_one_navigation?: ILevelOneNavigation[];
}
