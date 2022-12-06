<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama_waifu = trim($data['waifu_name']);
$keterangan = trim($data['keterangan']);
$gambar = $data['gambar'];
//jika nama waifu dan keterangan tidak kosong
if ($nama_waifu != '' and $keterangan != '') {
 $query = mysqli_query($koneksi, "insert into waifu(waifu_name,keterangan,gambar) 
values('$nama_waifu','$keterangan','$gambar')");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi)
?>