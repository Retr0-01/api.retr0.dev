-- 
-- ATLAS SOFTWARE API - DB INSTALL SCRIPT
--

-- ===========================================
--
--	DATABASE #1 - ETERNAL BATTLES
--
CREATE DATABASE IF NOT EXISTS eternal_battles;
USE eternal_battles;

--
-- Table structure for table `eb_players`
--
CREATE TABLE IF NOT EXISTS eb_players (
	id int AUTO_INCREMENT,
	steamid varchar(18) NOT NULL,
	perms int DEFAULT 0 NOT NULL,

	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
