import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiaDiem} from '../model/dia-diem';
import {XeService} from '../service/xe.service';
import {DiaDiemService} from '../service/dia-diem.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {NhaXeService} from '../service/nha-xe.service';
import {NhaXe} from '../model/nha-xe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  xeForm = new FormGroup({
    bienSoXe: new FormControl('', [Validators.required]),
    loaiXe: new FormControl('', [Validators.required]),
    diemDi: new FormControl('', [Validators.required]),
    diemDen: new FormControl('', [Validators.required]),
    gioDi: new FormControl('', [Validators.required]),
    gioDen: new FormControl('', [Validators.required]),
    nhaXe: new FormControl('', [Validators.required]),
  });

  diaDiem: DiaDiem[] = [];
  nhaXe: NhaXe[] = [];

  constructor(private xeService: XeService, private diaDiemService: DiaDiemService,
              private  nhaXeService: NhaXeService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAllDiaDiem();
    this.getAllNhaXe();
  }

  private getAllDiaDiem() {
    this.diaDiemService.getAll().subscribe(next => {
      this.diaDiem = next;
    });
  }

  private getAllNhaXe() {
    this.nhaXeService.getAll().subscribe(next => {
      this.nhaXe = next;
    });
  }

  submit() {
    const xe = this.xeForm.value;
    this.nhaXeService.findById(this.xeForm.value.nhaXe).subscribe(n => {
      xe.nhaXe = n;
      this.xeService.add(xe).subscribe(() => {
        Swal.fire('Thêm mới thành công');
        this.xeForm.reset();
        this.route.navigateByUrl('');
        console.log(xe);
      });
    });
  }


}
