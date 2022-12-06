import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nama: any; //init variable nama untuk namauser
  token: any;
  page = 0;
  perPage = 10;
  waifu: any[] = [];
  lists: any[] = [];
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public _apiService: ApiService, 
    private alertController: AlertController,
  ) {}
  ngOnInit() {
    this.loadToken();
  }
  //ceksesi untuk mengambil nama user
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getWaifu();
  }
  paginateArray() {
    this.page++;
    return this.waifu.filter(
    x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }
    getWaifu() {
    this._apiService.tampil('tampilWaifu.php').subscribe({
    next: (res: any) => {
    console.log('sukses', res);
    this.waifu = res;
    this.lists = this.paginateArray();
    },
    error: (err: any) => {
    console.log(err);
    },
    })
    }

    deleteWaifu(id: any) {
      this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
        text: 'Batal',
        handler: (data: any) => {
          console.log('dibatalkan', data);
        }
        },
        {
        text: 'Yakin',
        handler: (data: any) => {
        //jika tekan yakin
          this._apiService.hapus(id, '/hapusWaifu.php?id=').subscribe({
            next: (res: any) => {
              console.log('sukses', res);
              this.page = 0;
              this.perPage = 10;
              this.getWaifu();
            },
            error: (error: any) => {
              this._apiService.notif('gagal');
            }
          })
        }
      }]
      }).then(res => {
      res.present();
      })
    }
    doRefresh(event: any) {
      console.log('Mulai Refresh Konten');setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getWaifu();
      }, 2000);
    }
    loadMore(event: any) {
      console.log(event);
      setTimeout(() => {
        const array = this.paginateArray();
        console.log('new data: ', array);
        this.lists = this.lists.concat(array);
        console.log('list data: ', this.lists);
        event.target.complete();
        if (array?.length < this.perPage) {
          event.target.disabled = true;
        };
      }, 1000);
    }
  tambahWaifu(){
    this.router.navigateByUrl('/waifu-tambah');
  }
  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
