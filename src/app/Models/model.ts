export interface Products {
    id : string,
    name : string,
    data: Data[] | null; 
}

export interface Data {
    color?: string;
    capacity?: string | number;
    price?: number;
    generation?: string;
    year?: number;
    CPUmodel?: string;
    hardDiskSize?: string;
    strapColour?: string;
    caseSize?: string;
    description?: string;
    screenSize?: number;
    Capacity?: string | number;
    Generation?: string;
    Price?: string | number;
}

export interface ProductResponse {
    data:Products[]
}
