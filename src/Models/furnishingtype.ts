export interface Furnish{
    id:number;
    name: string;
}
export interface FurnishType{
    $id: number;
    $values: Furnish[];
    }