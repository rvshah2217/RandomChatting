-- phpMyAdmin SQL Dump
-- version 3.2.3
-- http://www.phpmyadmin.net
--
-- 호스트: localhost
-- 처리한 시간: 18-01-30 21:11 
-- 서버 버전: 5.1.41
-- PHP 버전: 5.2.12

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 데이터베이스: `rc`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `rc_message`
--

CREATE TABLE IF NOT EXISTS `rc_message` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `src_user` int(11) DEFAULT NULL,
  `dest_user` int(11) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 테이블의 덤프 데이터 `rc_message`
--

INSERT INTO `rc_message` (`no`, `src_user`, `dest_user`, `message`, `time`) VALUES
(1, 3, 2018, '123', '2018-01-30 16:57:37'),
(2, -1, 1517299515, '123', '2018-01-30 17:05:15'),
(3, -1, 1517299550, '123', '2018-01-30 17:05:50'),
(4, -1, 1517299827, '123', '2018-01-30 17:10:27'),
(5, 11, 1517299970, '123', '2018-01-30 17:12:50');

-- --------------------------------------------------------

--
-- 테이블 구조 `rc_wait_queue`
--

CREATE TABLE IF NOT EXISTS `rc_wait_queue` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- 테이블의 덤프 데이터 `rc_wait_queue`
--

INSERT INTO `rc_wait_queue` (`no`, `time`) VALUES
(1, '2018-01-30 16:24:19'),
(2, '2018-01-30 16:26:48'),
(3, '2018-01-30 16:47:20');
