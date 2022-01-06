CREATE TABLE IF NOT EXISTS `api_spaceretr0_com`.`api_keys`
(
    id          int             AUTO_INCREMENT,
    hashedKey   longtext        NULL,
    comment     longtext        NULL,
    created     datetime        NULL,

    PRIMARY KEY (id)
);

INSERT INTO `api_keys` (`id`, `hashedKey`, `comment`, `created`) VALUES (1, '$2b$10$TxV4ccPcroXEw3X/ePA/AeeWPEoMsDLU7BROa7UNa8sKl6bGhfsVS', 'TEST-KEY | Key: hello', '2022-01-06 20:11:28');
