export type myType = { [Key: string]: string | null };


export interface IRicerca extends myType {
  full_name: string | null;
  email: string | null;
  telefono: string | null;
}

export class Ricerca implements IRicerca {
  [Key: string]: string | null;

  constructor(
    public full_name: string | null = null,
    public email: string | null = null,
    public telefono: string | null = null
  ) {
  }

}
