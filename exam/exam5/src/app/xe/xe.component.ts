import {Component, OnInit} from '@angular/core';
import {Xe} from "../model/xe";
import {NhaXe} from "../model/nha-xe";
import {XeService} from "../service/xe.service";
import {NhaXeService} from "../service/nha-xe.service";
import Swal from  'sweetalert2';

@Component({
  selector: 'app-xe',
  templateUrl: './xe.component.html',
  styleUrls: ['./xe.component.css']
})
export class XeComponent implements OnInit {
  xeList: Xe[] = [];
  nhaXeList: NhaXe[] = [];
  bienSoXe: string;
  idDelete: number;

  constructor(private xeService: XeService, private nhaXeService: NhaXeService) {
  }

  ngOnInit(): void {
    this.getAllXe();
    // this.getAllNhaXe();
  }

  private getAllXe() {
    this.xeService.getAll().subscribe(xe => {
      this.xeList = xe.content;
    })
    console.log(this.xeList);
  }

  // private getAllNhaXe() {
  //   this.nhaXeService.getAll().subscribe(nhaXe => {
  //     this.nhaXeList = nhaXe;
  //   })
  // }

  getDelete(id: number, bienSoXe: string) {
    this.idDelete = id;
    this.bienSoXe = bienSoXe;
  }

  delete() {
    this.xeService.delete(this.idDelete).subscribe(next => {
      console.log(this.idDelete);
      this.getAllXe();
      Swal.fire('Xóa thành công!!!')
    });
  }
}
