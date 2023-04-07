DROP DATABASE IF EXISTS formeapp;

CREATE DATABASE formeapp;
USE formeapp;

CREATE TABLE lists(
    id      INTEGER AUTO_INCREMENT,
    value   TEXT,
    PRIMARY KEY (id)
);