-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: mysql669.umbler.com
-- Generation Time: 05-Ago-2020 às 17:27
-- Versão do servidor: 5.6.40
-- PHP Version: 5.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rkdatabase`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `rk_goals`
--

CREATE TABLE IF NOT EXISTS `rk_goals` (
  `id` int(11) NOT NULL,
  `rk_user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `concluded` date DEFAULT NULL,
  `obs` text,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `rk_hates`
--

CREATE TABLE IF NOT EXISTS `rk_hates` (
  `id` int(11) NOT NULL,
  `rk_user_id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `exception` varchar(45) DEFAULT NULL,
  `created_by` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `rk_hotels`
--

CREATE TABLE IF NOT EXISTS `rk_hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `classification` varchar(45) DEFAULT NULL,
  `period` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `description` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `rk_users`
--

CREATE TABLE IF NOT EXISTS `rk_users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `login` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rk_goals`
--
ALTER TABLE `rk_goals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rk_hates`
--
ALTER TABLE `rk_hates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rk_hotels`
--
ALTER TABLE `rk_hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rk_users`
--
ALTER TABLE `rk_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rk_goals`
--
ALTER TABLE `rk_goals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rk_hates`
--
ALTER TABLE `rk_hates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rk_hotels`
--
ALTER TABLE `rk_hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rk_users`
--
ALTER TABLE `rk_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
