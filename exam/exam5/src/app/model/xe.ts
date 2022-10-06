import {NhaXe} from "./nha-xe";

export interface Xe {
  id?: number;
  bienSoXe?: string;
  loaiXe?: string;
  diemDi?: string;
  diemDen?: string;
  gioDi?: string;
  gioDen?: string;
  nhaXe?: NhaXe;
}
