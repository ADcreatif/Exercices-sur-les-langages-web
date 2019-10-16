-- MySQL dump 10.13  Distrib 5.7.23, for Win64 (x86_64)
--
-- Host: localhost    Database: web_tuto
-- ------------------------------------------------------
-- Server version	5.7.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Table structure for table `e_shop`
--

DROP TABLE IF EXISTS `e_shop`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `e_shop`
(
    `id`          int(11)     NOT NULL AUTO_INCREMENT,
    `name`        varchar(64) NOT NULL,
    `description` text,
    `price`       double      DEFAULT '0',
    `weight`      double      DEFAULT '0',
    `quantity`    int(11)     DEFAULT '0',
    `color`       varchar(32) DEFAULT '',
    `picture`     varchar(64) DEFAULT 'default.jpg',
    PRIMARY KEY (`id`)
) ENGINE = MyISAM
  AUTO_INCREMENT = 7
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_shop`
--

LOCK TABLES `e_shop` WRITE;
/*!40000 ALTER TABLE `e_shop`
    DISABLE KEYS */;
INSERT INTO `e_shop`
VALUES (1, 'Sèche cheveux', 'babyliss sèche cheveux rétroprogramable 10vitesses. N\'as encore jamais tué personne', 450,
        17, 65, '', 'default.jpg'),
       (2, 'Patator', 'Patator homemade', 150.4, 1.5, 23, '', 'default.jpg'),
       (3, 'Peluche Licorne', 'Peluche arrante et douce. Elle est facilement transportable que pour les enfants', 21.99,
        120, 45, '', 'default.jpg'),
       (4, 'Ballon de beaudruche',
        'Lot de 5000 ballons de beaudruche prégonflés à moitié pour évênement a moitié importants. ', 119.2, 119.2, 28,
        '', 'default.jpg'),
       (5, 'Animal de compagnie',
        'Petite mithe fraichement abatue pour tenir compagnie au personnes agées. Permettre peut être une réconciliation familiale qui sait ? ',
        1, 0.5, 2, '', 'default.jpg'),
       (6, 'Laisse pour chien',
        '« Put down pooch with the Dog Leash gun » ! L’humour est d’un goût légèrement douteux mais drôle quand même',
        39.5, 0.2, 5, '', 'default.jpg');
/*!40000 ALTER TABLE `e_shop`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

-- Dump completed on 2019-03-14 19:10:54
