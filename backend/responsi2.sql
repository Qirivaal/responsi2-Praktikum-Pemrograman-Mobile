-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 02:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `responsi2`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

-- passwordnya ditambah dengan MD5
INSERT INTO `user` (`username`, `password`, `id`) VALUES
('Weeb', 'b93939873fd4923043b9dec975811f66', 1);

-- --------------------------------------------------------

--
-- Table structure for table `waifu`
--

CREATE TABLE `waifu` (
  `id` int(11) NOT NULL,
  `waifu_name` varchar(100) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `gambar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `waifu`
--

INSERT INTO `waifu` (`id`, `waifu_name`, `keterangan`, `gambar`) VALUES
(1, 'Rem', 'Dari anime re:zero', 'https://i.imgur.com/CepTqMl.jpeg'),
(2, 'ZeroTwo', 'Dari anime darling in the franxx', 'https://i.imgur.com/FrRvDwz.png'),
(3, 'Raiden Shogun', 'Dari Gensin Impek', 'https://i.imgur.com/oZqLG3q.jpg'),
(6, 'Nezuko', 'Demon Slayer', 'https://i.imgur.com/9RGMj86.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `waifu`
--
ALTER TABLE `waifu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `waifu`
--
ALTER TABLE `waifu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
