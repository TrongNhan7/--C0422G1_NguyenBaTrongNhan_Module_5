import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Xe} from '../model/xe';
import {XeService} from '../service/xe.service';
import {NhaXeService} from '../service/nha-xe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NhaXe} from '../model/nha-xe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  xeForm: FormGroup;
  xeEdit: Xe;
  idEdit: number;
  nhaXeList: NhaXe[];

  constructor(private xeService: XeService,
              private nhaXeService: NhaXeService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idEdit = +paramMap.get('id');
    });
  }


  ngOnInit(): void {
    this.getAllNhaXe();
    this.xeForm = new FormGroup({
      id: new FormControl(),
      bienSoXe: new FormControl('', [Validators.required]),
      loaiXe: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      gioDi: new FormControl('', [Validators.required]),
      gioDen: new FormControl('', [Validators.required]),
      nhaXe: new FormGroup({
        id: new FormControl(),
        tenNhaXe: new FormControl('', [Validators.required]),
        sdt: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
    });
    this.xeService.findById(this.idEdit).subscribe(next => {
      this.xeEdit = next;
      this.xeForm.patchValue(this.xeEdit);
      console.log(this.xeForm.value);
    });
  }

  private getAllNhaXe() {
    this.nhaXeService.getAll().subscribe(nhaXe => {
      this.nhaXeList = nhaXe;
    });
  }

  update() {
    const xe = this.xeForm.value;
    const nhaXe = this.xeForm.value.nhaXe;
    console.log(nhaXe);
    this.xeService.update(xe).subscribe(() => {
      this.nhaXeService.update(nhaXe).subscribe();
      Swal.fire('Cập nhập thành công');
      this.route.navigateByUrl('');
    });
  }
}
