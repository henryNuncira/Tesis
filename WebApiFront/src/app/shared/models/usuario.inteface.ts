import { Activo } from "./activo.enum";
import { Rol } from "./rol.enum";

export interface usuarioI
{
  idUsuario : number;
  nombreUsuario : string;
  password :string;
  activo :Activo;
  rol :Rol;


}
