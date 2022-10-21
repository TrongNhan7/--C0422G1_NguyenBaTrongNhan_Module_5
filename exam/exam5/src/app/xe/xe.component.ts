import {Component, OnInit} from '@angular/core';
import {Xe} from '../model/xe';
import {NhaXe} from '../model/nha-xe';
import {XeService} from '../service/xe.service';
import {NhaXeService} from '../service/nha-xe.service';
import Swal from 'sweetalert2';

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
  keyword = '';
  page = 0;
  totalPage: number;

  constructor(private xeService: XeService, private nhaXeService: NhaXeService) {
    this.getPage(0);
  }

  ngOnInit(): void {
    this.getAllXe();
  }

  private getAllXe() {
    this.xeService.getAll(this.keyword, this.page).subscribe(xe => {
      this.xeList = xe.content;
    });
    console.log(this.xeList);
  }

  getDelete(id: number, bienSoXe: string) {
    this.idDelete = id;
    this.bienSoXe = bienSoXe;
  }

  delete() {
    this.xeService.delete(this.idDelete).subscribe(next => {
      console.log(this.idDelete);
      this.getAllXe();
      Swal.fire('Xóa thành công!!!');
    });
  }

  search() {
    if (this.keyword == null) {
      return this.xeList;
    } else {
      this.xeService.getAll(this.keyword, this.page).subscribe(xe => {
        this.xeList = xe.content;
      });
    }
    console.log(this.keyword);
    this.keyword = '';
  }

  getPage(currentPage: number) {
    this.page = currentPage;
    if (this.page < 0) {
      this.page = 0;
    } else {
      if (this.page > this.totalPage) {
        this.page = this.totalPage - 1;
      }
    }
    this.xeService.getAll(this.keyword, this.page).subscribe(xes => {
      this.xeList = xes.content;
      this.totalPage = xes.totalPages;
      console.log(this.totalPage);
    });
  }
}
