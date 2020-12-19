SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `rk_goals` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
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
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
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
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(155) NOT NULL,
  `classification` varchar(45) DEFAULT NULL,
  `period` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `description` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `rk_notification`
--

CREATE TABLE IF NOT EXISTS `rk_notification` (
  `id` int(10) unsigned NOT NULL PRIMARY KEY  AUTO_INCREMENT,
  `rk_user_id` int(10) unsigned DEFAULT NULL,
  `rk_girlfriend_id` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `rk_users`
--

CREATE TABLE IF NOT EXISTS `rk_users` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `rk_girlfriend_id` varchar(45) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
