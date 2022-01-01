-- 
-- Personal Website - DB INSTALL SCRIPT
--

-- ===========================================
--
--	DATABASE #1 - api_spaceretr0_com
--
CREATE DATABASE IF NOT EXISTS api_spaceretr0_com;

--
-- Table structure for table `blog_posts`
--
CREATE TABLE IF NOT EXISTS `api_spaceretr0_com`.`blog_posts`
(
    id        int AUTO_INCREMENT,
    title     varchar(255)  NULL,
    body	  longtext      NULL,
    created   datetime      NULL,

	PRIMARY KEY (id)
);