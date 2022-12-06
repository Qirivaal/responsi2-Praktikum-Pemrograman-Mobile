import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-waifu-tambah',
  templateUrl: './waifu-tambah.page.html',
  styleUrls: ['./waifu-tambah.page.scss'],
})
export class WaifuTambahPage implements OnInit {
  id: any;
  waifu_name: any;
  keterangan: any;
  gambar: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}
  addWaifu() {
    let data = {
      waifu_name: this.waifu_name,
      keterangan: this.keterangan,
      gambar: this.gambar,
    };
    this._apiService.tambah(data, '/tambahWaifu.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.waifu_name = '';
        this.keterangan = '';
        this.gambar = '';
        this._apiService.notif('Berhasil input Waifu');
        this.router.navigateByUrl('/home');
      },
      error: (err: any) => {
        this._apiService.notif('Gagal input Waifu');
      },
    });
  }
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
