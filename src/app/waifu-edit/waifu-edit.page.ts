import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-waifu-edit',
  templateUrl: './waifu-edit.page.html',
  styleUrls: ['./waifu-edit.page.scss'],
})
export class WaifuEditPage implements OnInit {
  id: any;
  waifu_name: any;
  keterangan: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilWaifu(this.id);
    });
  }

  ngOnInit() {}

  ambilWaifu(id: any) {
    this._apiService.lihat(id, '/lihatWaifu.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let waifu = hasil;
        this.waifu_name = waifu.waifu_name;
        this.keterangan = waifu.keterangan;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      },
    });
  }

  editWaifu() {
    let data = {
      id: this.id,
      waifu_name: this.waifu_name,
      keterangan: this.keterangan,
    };
    this._apiService.edit(data, '/editWaifu.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.waifu_name = '';
        this.keterangan = '';
        this._apiService.notif('Berhasil edit Waifu');
        this.router.navigateByUrl('/home');
      },
      error: (err: any) => {
        this._apiService.notif('Gagal edit Waifu');
      },
    });
  }
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
