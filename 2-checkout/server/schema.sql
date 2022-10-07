DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE IF NOT EXISTS form1 (
  sessionid VARCHAR(150) NOT NULL,
  name VARCHAR(40) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE,
  password VARCHAR(16) NOT NULL,
  PRIMARY KEY (sessionid)
);

CREATE TABLE IF NOT EXISTS form2 (
  sessionid VARCHAR(150) NOT NULL,
  addressline1 VARCHAR(60) NOT NULL,
  addressline2 VARCHAR(60),
  city VARCHAR(60) NOT NULL,
  state VARCHAR(30) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  PRIMARY KEY (sessionid)
);

CREATE TABLE IF NOT EXISTS form3 (
  sessionid VARCHAR(150) NOT NULL,
  ccnumber VARCHAR(40) NOT NULL,
  expiration VARCHAR(10) NOT NULL,
  cvv VARCHAR(10) NOT NULL,
  billingzip VARCHAR(5) NOT NULL,
  PRIMARY KEY (sessionid)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/