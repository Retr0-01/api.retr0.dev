CREATE TABLE IF NOT EXISTS `api_spaceretr0_com`.`api_keys`
(
    id          int             AUTO_INCREMENT,
    hashedKey   varchar(32)     NULL,
    comment     longtext        NULL,
    created     datetime        NULL,

    PRIMARY KEY (id)
);
