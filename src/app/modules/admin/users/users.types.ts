export interface User
{
    id?: string;
    avatar?: string | null;
    background?: string | null;
    first_name: string;
    last_name: string;
    email: string;
    password: string; 
    status: string;
    role?: string;
    user_informations?: UserInformations;
    user_shop?: UserShop;
}

export interface UserInformations
{
    id?: string;
    complete_address: string;
    primary_contact: string;
    secondary_contact?: string;
}

export interface UserShop
{
    id?: string;
    name: string;
    address: string;
    contact: string;
    open_hour: string;
    close_hour: string;
    status: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    pm_gcash: boolean;
    pm_cod: boolean;
    is_active: boolean;
    delivery_charge: string;
}
