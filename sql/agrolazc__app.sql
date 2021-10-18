-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2020 a las 02:55:25
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `control_agestre`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afecciones`
--

CREATE TABLE `afecciones` (
  `id_afeccion` varchar(13) COLLATE utf8_bin NOT NULL,
  `nombre_afeccion` varchar(20) COLLATE utf8_bin NOT NULL,
  `modo_afeccion` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afecciones_tipos_afecciones`
--

CREATE TABLE `afecciones_tipos_afecciones` (
  `id_afecciones_tipos_afeccion` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_afeccion` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_tipo_afeccion` varchar(13) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agricultores`
--

CREATE TABLE `agricultores` (
  `id_agricultor` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_usuario` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `agricultores`
--

INSERT INTO `agricultores` (`id_agricultor`, `id_usuario`) VALUES
('caua1', 'RUEB865200123'),
('caua2', 'MOMO9285018'),
('caua3', 'AICT891216281');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesores`
--

CREATE TABLE `asesores` (
  `id_asesor` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_usuario` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `asesores`
--

INSERT INTO `asesores` (`id_asesor`, `id_usuario`) VALUES
('cauas1', 'SICL7998345'),
('cauas10', 'D7Q 9W25'),
('cauas11', 'D7Q 9W28'),
('cauas12', 'D7Q 9W30'),
('cauas13', 'D7Q 9W32'),
('cauas14', 'D7Q 9W35'),
('cauas15', 'D7Q 9W40'),
('cauas16', 'D7Q 9W44'),
('cauas17', 'D7Q 9W45'),
('cauas18', 'D7Q 9W46'),
('cauas19', 'D7Q 9W47'),
('cauas2', 'OOML769253254'),
('cauas20', 'D7Q 9W49'),
('cauas21', 'D7Q 9W51'),
('cauas22', 'D7Q 9W53'),
('cauas23', 'D7Q 9W55'),
('cauas24', 'D7Q 9W57'),
('cauas25', 'D7Q 9W60'),
('cauas26', 'D7Q 9W62'),
('cauas27', 'D7Q 9W64'),
('cauas28', 'D7Q 9W66'),
('cauas29', 'D7Q 9W68'),
('cauas3', 'AICC8333042'),
('cauas30', 'D7Q 9W70'),
('cauas31', 'D7Q 9W72'),
('cauas32', 'D7Q 9W74'),
('cauas33', 'D7Q 9W76'),
('cauas34', 'D7Q 9W78'),
('cauas35', 'D7Q 9W80'),
('cauas36', 'D7Q 9W82'),
('cauas37', 'D7Q 9W84'),
('cauas38', 'D7Q 9W86'),
('cauas39', 'D7Q 9W88'),
('cauas40', 'D7Q 9W90'),
('cauas41', 'D7Q 9W93'),
('cauas42', 'D7Q 9W95'),
('cauas43', 'D7Q 9W98'),
('cauas44', 'D7Q 9W99'),
('cauas45', 'D7Q 9W100'),
('cauas46', 'V8E 3T0'),
('cauas47', 'N8H 2O3'),
('cauas48', 'Q1D 1A3'),
('cauas49', 'Y5G 3F9'),
('cauas5', 'D7Q 9W7'),
('cauas50', 'B8L 6S3'),
('cauas51', 'B0B 8L4'),
('cauas52', 'G1D 1A9'),
('cauas53', 'F9I 8D2'),
('cauas54', 'C0T 6F4'),
('cauas55', 'K8L 9N6'),
('cauas56', 'U0K 2Q7'),
('cauas57', 'T3M 8S5'),
('cauas58', 'X9I 8K1'),
('cauas59', 'M9Z 1V4'),
('cauas6', 'D7Q 9W9'),
('cauas60', 'E3W 2R6'),
('cauas61', 'Y0D 0Q0'),
('cauas62', 'E0N 8K0'),
('cauas63', 'O7H 2L8'),
('cauas64', 'Z6W 9G9'),
('cauas65', 'W2A 2P3'),
('cauas66', 'J6R 8E2'),
('cauas67', 'N6U 2V7'),
('cauas68', 'W8G 7Y4'),
('cauas69', 'D9Y 0U0'),
('cauas7', 'D7Q 9W16'),
('cauas70', 'B0W 4G7'),
('cauas71', 'J1Y 9S9'),
('cauas72', 'W4Y 2M3'),
('cauas73', 'O2B 3Q4'),
('cauas74', 'P5I 9D1'),
('cauas75', 'T4C 3E6'),
('cauas76', 'U3Y 7D2'),
('cauas77', 'H6F 0D0'),
('cauas78', 'Q8M 0Y6'),
('cauas79', 'R2W 2T6'),
('cauas8', 'D7Q 9W18'),
('cauas80', 'Q2N 4X8'),
('cauas81', 'Z3D 7B2'),
('cauas82', 'A9P 2H0'),
('cauas9', 'D7Q 9W21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesorias`
--

CREATE TABLE `asesorias` (
  `id_asesoria` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_agricultor` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_asesor` varchar(13) COLLATE utf8_bin NOT NULL,
  `fecha_asesoria` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_estado` varchar(13) COLLATE utf8_bin NOT NULL,
  `observacion` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'lorem'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `asesorias`
--

INSERT INTO `asesorias` (`id_asesoria`, `id_agricultor`, `id_asesor`, `fecha_asesoria`, `id_estado`, `observacion`) VALUES
('caas1', 'caua1', 'cauas1', '2010-12-10 06:00:00', 'cae2', 'lorem'),
('caas2', 'caua2', 'cauas2', '2013-12-30 06:00:00', 'cae1', 'lorem'),
('caas3', 'caua3', 'cauas3', '2013-11-25 06:00:00', 'cae2', 'lorem'),
('caas4', 'caua1', 'cauas1', '2013-11-07 06:00:00', 'cae3', 'Cancelada por el asesor'),
('caas5', 'caua2', 'cauas2', '2011-05-17 05:00:00', 'cae2', 'lorem');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id_calificacion` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_asesor` varchar(13) COLLATE latin1_spanish_ci NOT NULL DEFAULT '0',
  `id_agricultor` varchar(13) COLLATE latin1_spanish_ci NOT NULL DEFAULT '0',
  `calificacion_inicial` int(1) NOT NULL DEFAULT '2',
  `calificacion_final` int(1) NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_categoria` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT 'lorem'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `valor_categoria`) VALUES
('capcat1', 'insecticidas'),
('capcat2', 'fumigantes'),
('capcat3', 'fungicidas'),
('capcat4', 'herbicidas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cultivos`
--

CREATE TABLE `cultivos` (
  `id_cultivo` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_grupo_cultivo` varchar(13) COLLATE utf8_bin NOT NULL,
  `nombre_cultivo` varchar(45) COLLATE utf8_bin NOT NULL,
  `epoca_cultiuvo` enum('primavera','verano','otoño','invierno') COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripciones_afecciones`
--

CREATE TABLE `descripciones_afecciones` (
  `id_descripcion_afeccion` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_afeccion` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_tipo_grupo` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_dictamenes`
--

CREATE TABLE `detalles_dictamenes` (
  `id_detalle_dictamen` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_dictamen` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_status` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `foto` varchar(30) COLLATE latin1_spanish_ci DEFAULT NULL,
  `descripcion` varchar(150) COLLATE latin1_spanish_ci NOT NULL DEFAULT 'Lorem Ipsum dolor sir Ament'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_recetas`
--

CREATE TABLE `detalles_recetas` (
  `id_detalle_receta` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_receta` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_tipo_afeccion` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_afeccion` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_status` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `umbral` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dictamenes`
--

CREATE TABLE `dictamenes` (
  `id_dictamen` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci NOT NULL DEFAULT '01/01/00',
  `id_huerto` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_agricultor` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_asesor` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_lider_asesor` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `observaciones` text COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envases`
--

CREATE TABLE `envases` (
  `id_envases` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_envase` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT 'lorem'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `envases`
--

INSERT INTO `envases` (`id_envases`, `valor_envase`) VALUES
('cape1', 'botella'),
('cape2', 'frasco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id_estado` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_estado` varchar(13) COLLATE utf8_bin NOT NULL DEFAULT 'pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id_estado`, `valor_estado`) VALUES
('cae1', 'aceptada'),
('cae2', 'pendiente'),
('cae3', 'rechazada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos_afecciones`
--

CREATE TABLE `grupos_afecciones` (
  `id_grupo_afeccion` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_grupo_afeccion` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos_cultivos`
--

CREATE TABLE `grupos_cultivos` (
  `id_grupo_cultivo` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_grupo` varchar(45) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `huertos`
--

CREATE TABLE `huertos` (
  `id_huerto` int(11) NOT NULL,
  `id_cultivo` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_agricultor` varchar(13) COLLATE utf8_bin NOT NULL,
  `tipo_suelo` varchar(45) COLLATE utf8_bin NOT NULL,
  `coordenada` varchar(100) COLLATE utf8_bin NOT NULL,
  `estatus` enum('sembrando','cosechando') COLLATE utf8_bin NOT NULL,
  `duracion` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lider_temporal`
--

CREATE TABLE `lider_temporal` (
  `id_lider_temporal` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_usuario` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_usuario_ap` varchar(13) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presentaciones`
--

CREATE TABLE `presentaciones` (
  `id_presentacion` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_producto` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_unidad_envase` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `presentaciones`
--

INSERT INTO `presentaciones` (`id_presentacion`, `id_producto`, `id_unidad_envase`, `valor`) VALUES
('capp1', 'AI53090', 'capue5', 100),
('capp2', 'AF42045', 'capue3', 1250),
('capp3', 'AH41011', 'capue3', 235),
('capp4', 'AH41110', 'capue5', 50),
('capp5', 'AH51010', 'capue3', 130);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` varchar(13) COLLATE utf8_bin NOT NULL DEFAULT '001' COMMENT 'dummy id',
  `marca_producto` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'lorem ' COMMENT 'lorem product',
  `nombre_tecnico` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'lorem ipsum' COMMENT 'lorem ipsum'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `marca_producto`, `nombre_tecnico`) VALUES
('AF42045', 'fontelis', 'pentiopirad'),
('AH41011', 'accent', 'nicosulfuron'),
('AH41110', 'titus', 'rimsulfuron'),
('AH51010', 'goal', 'oxifluorfen'),
('AI53090', 'exalt', 'spinoteram');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_categorias`
--

CREATE TABLE `productos_categorias` (
  `id_producto_categoria` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_producto` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_categoria` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `productos_categorias`
--

INSERT INTO `productos_categorias` (`id_producto_categoria`, `id_producto`, `id_categoria`) VALUES
('capc1', 'AI53090', 'capcat1'),
('capc2', 'AF42045', 'capcat1'),
('capc3', 'AH41011', 'capcat4'),
('capc4', 'AH41110', 'capcat4'),
('capc5', 'AH51010', 'capcat4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id_receta` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_huerto` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_cultivo` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_lider_temporal` varchar(13) COLLATE latin1_spanish_ci NOT NULL,
  `id_lider_asesor` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `objetivo` text COLLATE latin1_spanish_ci,
  `observaciones` text COLLATE latin1_spanish_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolesusuarios`
--

CREATE TABLE `rolesusuarios` (
  `id_rolusuario` varchar(13) COLLATE utf8_bin NOT NULL,
  `rolusuario` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rolesusuarios`
--

INSERT INTO `rolesusuarios` (`id_rolusuario`, `rolusuario`) VALUES
('caru1', 'Agricultor'),
('caru2', 'Asesor'),
('caru3', 'Lider asesor'),
('caru4', 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_afecciones`
--

CREATE TABLE `tipos_afecciones` (
  `id_tipo_afeccion` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_tipo_afeccion` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_grupos_afecciones`
--

CREATE TABLE `tipos_grupos_afecciones` (
  `id_tipo_grupo` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_tipo_afeccion` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_grupo_afeccion` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidades`
--

CREATE TABLE `unidades` (
  `id_unidad` varchar(13) COLLATE utf8_bin NOT NULL,
  `valor_unidad` enum('litros','gramos') COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `unidades`
--

INSERT INTO `unidades` (`id_unidad`, `valor_unidad`) VALUES
('apu2', 'litros'),
('capu1', 'gramos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidades_envases`
--

CREATE TABLE `unidades_envases` (
  `id_unidad_envase` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_unidad` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_envase` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `unidades_envases`
--

INSERT INTO `unidades_envases` (`id_unidad_envase`, `id_unidad`, `id_envase`) VALUES
('capue1', 'capu1', 'cape1'),
('capue2', 'capu2', 'cape1'),
('capue3', 'capu1', 'cape1'),
('capue4', 'capu2', 'cape1'),
('capue5', 'capu1', 'cape2'),
('capue6', 'capu2', 'cape2'),
('capue7', 'capu1', 'cape2'),
('capue8', 'capu2', 'cape2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` varchar(13) COLLATE utf8_bin NOT NULL,
  `nombre_usuario` varchar(150) COLLATE utf8_bin NOT NULL DEFAULT 'John Doe',
  `email_usuario` varchar(150) COLLATE utf8_bin NOT NULL DEFAULT 'John@doe.domain',
  `telefono_usuario` varchar(20) COLLATE utf8_bin NOT NULL,
  `direccion_usuario` varchar(200) COLLATE utf8_bin NOT NULL DEFAULT 'Fake main Street 123',
  `pass` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `email_usuario`, `telefono_usuario`, `direccion_usuario`, `pass`) VALUES
('A3G 0L5', 'Chantale Carver', 'ipsum@anteNunc.ca', '16800104 7086', 'Ap #417-9848 Pellentesque, St.', 'UYR78BSV4AO'),
('A3S 8H8', 'Heather Benjamin', 'sem@pharetranibhAliquam.org', '16451003 6066', '6416 Quisque Avenue', 'GMR57GGK6QZ'),
('A9P 2H0', 'Ivana Bennett', 'Nunc.ullamcorper@eu.net', '16750604 2121', '8855 Fringilla. St.', 'NYX07ACJ8RK'),
('AICC8333042', 'Magna Cueli Cadiñanos', 'blorem@blorem.net', '8445252343', 'Plaza Lorem, 157B 4ºG', '&^JCDaCQVx5vCxaxJUXv'),
('AICT891216281', 'Ariana Cotrofe Thomas', 'blorem@blorem.org', '8581000059', 'Carrera Lorem ipsum dolor, 199A 20ºH', 'U$HgbCYr@BXHkviD!#$o'),
('B0B 8L4', 'Orli Todd', 'eu.dui.Cum@feugiattelluslorem.net', '16591113 4681', '980-6380 Vitae Avenue', 'STS18SUI6FH'),
('B0R 7M2', 'Demetria Fitzgerald', 'Sed@augue.edu', '16200517 5696', 'P.O. Box 645, 2190 Placerat, Rd.', 'BKS94CIW8LJ'),
('B0W 4G7', 'Odette Mcmahon', 'vitae@Maurismolestie.co.uk', '16290101 2217', '632-9798 Vehicula Av.', 'OQI79XLL8XP'),
('B2Y 9N5', 'Nola Flynn', 'tempus@Namnulla.com', '16411010 2078', 'Ap #128-1565 Suspendisse St.', 'ZFI55DXH4EH'),
('B5P 9Z2', 'Echo Bond', 'enim@nisimagnased.org', '16840822 2282', 'P.O. Box 956, 189 Sociis Rd.', 'HPC48SDD8QA'),
('B8L 6S3', 'Shay Burt', 'mi.enim@auctorodio.co.uk', '16530523 7876', '2308 Tincidunt. Avenue', 'XYJ83MMV8CD'),
('C0T 6F4', 'Danielle Nguyen', 'Sed@sempertellusid.co.uk', '16820607 9074', '9805 Urna. Ave', 'AEK50GIF5HS'),
('C5B 0R0', 'Hermione Vega', 'Curabitur.egestas.nunc@Sedeu.ca', '16041112 2831', '3054 Velit Avenue', 'VMY44ZKO4ZB'),
('D0A 1V0', 'Maggy Foreman', 'ligula@mauris.co.uk', '16510627 6347', '7179 Eu Ave', 'FAT12SOU2BY'),
('D1Q 6D3', 'Rebekah Hensley', 'dolor.Quisque.tincidunt@eu.org', '16950405 8422', '892-1331 Vestibulum Ave', 'WQF96BQL2KH'),
('D2B 3D7', 'Pearl Hartman', 'ornare.lectus@ligula.co.uk', '16550713 5472', '3061 Amet, Av.', 'TBC59TFZ4ZM'),
('D2R 7G9', 'Montana Brennan', 'elit.pretium@dictum.com', '16290615 6753', 'Ap #621-658 Tempor St.', 'QAR10YFB2YP'),
('D2S 0Z3', 'Hillary Shelton', 'Curabitur.dictum@arcuVestibulum.com', '16410125 9390', 'Ap #586-1515 Lobortis Avenue', 'NNA78AQE4DS'),
('D3K 5I2', 'Quail Frost', 'amet@Quisqueornare.org', '16780807 0994', '1016 Sem Rd.', 'CHM39UGG1KQ'),
('D4D 1J0', 'Nayda Ware', 'dolor.elit@seddictumeleifend.com', '16410721 8432', '434-9388 In Rd.', 'CEP14GJR3AI'),
('D5A 8X1', 'Lilah Hays', 'a@tincidunt.edu', '16400130 7653', '851-5204 Aliquam Avenue', 'FJR92HFL6TT'),
('D6T 5P8', 'Willa Sellers', 'enim@Phasellusat.co.uk', '16700509 0837', '728-825 Sit Ave', 'FKB02EQB6YH'),
('D7Q 9W10', 'Ori Flowers', 'tincidunt.aliquam.arcu@aauctornon.edu', '16780114 4432', 'Ap #899-5312 Rutrum Avenue', 'KHH30UZM5NL'),
('D7Q 9W100', 'Farrah Black', 'sem@velit.org', '16180826 2800', '7385 Fusce Avenue', 'YWP52RZC4YQ'),
('D7Q 9W101', 'Glenna Harding', 'Class.aptent@sit.ca', '16800317 5802', 'Ap #297-9975 Nec, Rd.', 'JEV10GIC9WA'),
('D7Q 9W102', 'Xandra Jimenez', 'magna.Sed@in.com', '16970603 4031', 'Ap #953-8469 Nam Avenue', 'BYQ92XHM5GE'),
('D7Q 9W11', 'Danielle Schwartz', 'elementum@Proin.ca', '16780720 1517', 'P.O. Box 455, 4761 Elementum, Avenue', 'EYS67DDK1BE'),
('D7Q 9W12', 'Rhonda Jimenez', 'Vivamus.sit@etmalesuada.edu', '16910630 1915', 'P.O. Box 713, 7847 Dignissim Ave', 'HND00NHB9EC'),
('D7Q 9W13', 'Zoe Rose', 'enim.commodo@Suspendisse.net', '16430201 3109', '463-7368 Nec St.', 'XAI55UVL5PM'),
('D7Q 9W14', 'Illiana Tyler', 'et.euismod.et@Nunclaoreet.net', '16100311 2404', 'Ap #978-7584 Tellus. St.', 'QJF63MGS7TR'),
('D7Q 9W15', 'Hanae Mosley', 'tincidunt@maurisaliquameu.edu', '16480124 5350', '191-2833 Ac Rd.', 'OFI83JXH5RX'),
('D7Q 9W16', 'Kylynn Welch', 'egestas.ligula@lacus.org', '16060512 1979', '183-802 Nonummy Rd.', 'LOB85XNA1BC'),
('D7Q 9W17', 'Desiree Stone', 'risus.Nunc@enimcondimentumeget.com', '16550320 6681', 'P.O. Box 106, 7262 Elit, Street', 'IDB63ZVR1DK'),
('D7Q 9W18', 'Fallon Sampson', 'sit@adipiscing.co.uk', '16270313 1942', 'P.O. Box 600, 3058 Sem Road', 'ASX63UPQ4AT'),
('D7Q 9W19', 'Blossom Kane', 'posuere@dapibusquamquis.edu', '16840205 3097', 'Ap #696-4781 Nec Rd.', 'UKZ67IAX3TV'),
('D7Q 9W20', 'Margaret Dunlap', 'tincidunt.aliquam@placeratCras.com', '16930420 4234', '8943 Facilisis Av.', 'WTZ54DQB8SD'),
('D7Q 9W21', 'Elaine Swanson', 'ipsum@enim.com', '16440118 2946', 'Ap #921-476 Phasellus St.', 'VZF81JBH9LC'),
('D7Q 9W22', 'Daryl Camacho', 'ligula@purusaccumsaninterdum.edu', '16210311 1601', 'P.O. Box 566, 9416 Sed, Rd.', 'AQZ42HYV5OR'),
('D7Q 9W23', 'Heather Fischer', 'arcu@scelerisque.net', '16860406 4496', 'P.O. Box 318, 5728 Egestas. Avenue', 'XRI29SUY0EU'),
('D7Q 9W24', 'Zorita Shelton', 'vulputate.risus@necdiamDuis.org', '16330201 7300', 'Ap #383-4558 Non, Ave', 'YFO85JXU1VZ'),
('D7Q 9W25', 'Carolyn Dickerson', 'tellus@velnislQuisque.co.uk', '16310914 7391', 'Ap #805-5535 Id, Rd.', 'APG15BZV0SO'),
('D7Q 9W26', 'Diana Charles', 'non.massa.non@Cumsociisnatoque.co.uk', '16200207 3365', 'P.O. Box 675, 5138 Amet St.', 'CMZ19QVR3GE'),
('D7Q 9W27', 'Gwendolyn Daniel', 'interdum.Curabitur.dictum@consectetuereuismod.edu', '16751218 2077', 'P.O. Box 974, 2164 Arcu St.', 'PWX28TCS0WO'),
('D7Q 9W28', 'Jaime Morgan', 'in@indolor.edu', '16381102 4789', 'Ap #928-664 Fermentum Rd.', 'VTS96IEG4RB'),
('D7Q 9W29', 'Jaden Madden', 'non@parturientmontesnascetur.com', '16360907 1372', '2263 Auctor Rd.', 'LID96NIJ9WA'),
('D7Q 9W30', 'Nichole Harris', 'sodales@Phasellusfermentum.ca', '16451008 4710', 'Ap #283-8030 Massa. St.', 'XNS20RUP7LP'),
('D7Q 9W31', 'Gretchen Kirby', 'sodales@dapibusgravidaAliquam.org', '16320302 0577', '7215 Hendrerit Rd.', 'VVM15CMB6PR'),
('D7Q 9W32', 'Cailin Burnett', 'eu.metus.In@nuncestmollis.org', '16070719 0427', '5649 Sociis Street', 'MYP40IDV2UQ'),
('D7Q 9W33', 'Margaret Bright', 'neque.Nullam.ut@pulvinararcuet.net', '16840213 1257', 'P.O. Box 691, 2825 Mauris, Ave', 'JNK53SBV0SV'),
('D7Q 9W34', 'Regina Singleton', 'mi.fringilla.mi@metussitamet.org', '16460624 9995', 'Ap #803-1422 Ipsum Av.', 'ROY55QXX6ZK'),
('D7Q 9W35', 'Stella Ferguson', 'sed.consequat.auctor@arcuVestibulumante.ca', '16660825 6134', 'P.O. Box 538, 641 Pellentesque Ave', 'BPB02KRF2XP'),
('D7Q 9W36', 'Claire Joseph', 'felis.ullamcorper.viverra@atortor.edu', '16931025 7614', 'Ap #587-2138 Fermentum Avenue', 'HUE13BGS0VV'),
('D7Q 9W37', 'Debra Potts', 'urna@hendrerit.net', '16210123 9966', '3780 Sit St.', 'NIT29UPY8CI'),
('D7Q 9W38', 'Brooke Dillon', 'cursus.diam.at@et.ca', '16540310 2121', 'P.O. Box 510, 8791 Integer Avenue', 'DYQ72AIY5IU'),
('D7Q 9W39', 'Jenna Gibson', 'luctus.vulputate@uteratSed.com', '16300607 8194', '4197 Sapien, Ave', 'UFA45KAT0LS'),
('D7Q 9W4', 'Darryl Beach', 'mauris@tristiquenequevenenatis.com', '16911005 9293', '677-8730 Dui, St.', 'LIJ06NRI5HP'),
('D7Q 9W40', 'Xantha Frederick', 'risus.Morbi@vestibulum.edu', '16980906 9280', '9015 Aenean Road', 'NOQ50TZX6FL'),
('D7Q 9W41', 'Cherokee Espinoza', 'erat@bibendum.edu', '16971224 0820', 'Ap #168-5378 Sit Rd.', 'UNN08HZO6TZ'),
('D7Q 9W42', 'Olivia Cook', 'ut@metussit.co.uk', '16920220 3486', 'Ap #943-2365 Aliquam Avenue', 'VEC21UOO3LH'),
('D7Q 9W43', 'Holly English', 'lectus@dictum.ca', '16870106 0041', '7345 Ornare Road', 'XRK83YGG0DJ'),
('D7Q 9W44', 'Martina Gilmore', 'Sed.nunc@non.com', '16080521 1620', 'P.O. Box 380, 8191 Nulla Rd.', 'WHR84OHO2XG'),
('D7Q 9W45', 'Shay Lawrence', 'augue@felisadipiscing.edu', '16390203 1008', '9886 Hendrerit St.', 'HBH04CIA0PB'),
('D7Q 9W46', 'Britanney Bowers', 'facilisis@arcuMorbi.co.uk', '16500816 2785', 'P.O. Box 274, 6777 Interdum. Av.', 'APE61LQI1WV'),
('D7Q 9W47', 'Rachel Holder', 'mollis@arcuSed.org', '16730926 7339', 'P.O. Box 315, 8963 Quis, Rd.', 'WPY38JCZ2UI'),
('D7Q 9W48', 'Ainsley Brock', 'Nulla@purusaccumsan.net', '16961113 4090', 'Ap #950-937 Pede St.', 'BXJ10RTR1ZP'),
('D7Q 9W49', 'Zenaida Mack', 'lectus.justo@mattissemperdui.net', '16930220 8120', '204-9861 Sed Road', 'XSL15FQI3MY'),
('D7Q 9W5', 'Ursula Valdez', 'turpis@ultriciesdignissimlacus.edu', '16551119 6262', '178-3989 Nunc Ave', 'HSD60SBH7LP'),
('D7Q 9W50', 'Rana Christian', 'sit.amet@ametorciUt.com', '16331010 5402', 'Ap #359-4693 Nec, St.', 'KSL90SIC3EK'),
('D7Q 9W51', 'Ivy Huff', 'amet.faucibus@dictumeu.co.uk', '16740616 6525', '847-4267 Ad St.', 'TTZ75FKI4NV'),
('D7Q 9W52', 'Clementine Berry', 'hendrerit@blandit.co.uk', '16020613 4686', 'Ap #449-4404 Nascetur Road', 'BBG31SBN1FD'),
('D7Q 9W53', 'Daphne Melton', 'ipsum@milaciniamattis.org', '16150926 5953', 'Ap #140-8074 Quis Street', 'AAM08SNP1WH'),
('D7Q 9W54', 'Piper Church', 'Fusce.aliquam.enim@pellentesquemassalobortis.org', '16350801 9118', 'Ap #712-4456 Sed St.', 'AIC98ZKU2ZS'),
('D7Q 9W55', 'Cleo Yang', 'vulputate.posuere.vulputate@Cumsociisnatoque.org', '16971003 7723', 'P.O. Box 511, 2100 Proin St.', 'VSL47SZY2PH'),
('D7Q 9W56', 'Cameron Collier', 'odio@id.co.uk', '16120805 8493', 'Ap #947-283 Aliquam St.', 'GMW16LMK2CX'),
('D7Q 9W57', 'Roary Drake', 'enim@duiaugueeu.com', '16730203 1450', 'Ap #549-7587 Arcu. Ave', 'QBZ48VLQ3MH'),
('D7Q 9W58', 'Madaline Melton', 'quis@mollis.edu', '16921020 2561', 'P.O. Box 301, 4630 Maecenas Street', 'BHV71JDA6NI'),
('D7Q 9W59', 'Yael Nunez', 'vulputate@euligula.com', '16730622 5199', '4135 Sollicitudin Rd.', 'QBB43UYS5AG'),
('D7Q 9W6', 'Dacey Woods', 'interdum@orci.com', '16470107 9032', 'Ap #266-2289 Ante. Av.', 'CZQ62MUR9VR'),
('D7Q 9W60', 'Janna Blackburn', 'a.purus.Duis@felisegetvarius.ca', '16240301 0370', 'P.O. Box 130, 6388 Velit Rd.', 'KFV58XTE7GK'),
('D7Q 9W61', 'Ivory Gilliam', 'tincidunt.congue@erat.net', '16140109 7397', '5875 Tortor. Rd.', 'LZG68UZV3JY'),
('D7Q 9W62', 'Ariel Mayer', 'magna@purusNullam.net', '16970604 6464', 'Ap #233-811 Malesuada St.', 'RZD70SBD2UV'),
('D7Q 9W63', 'Clementine Crawford', 'rutrum.non@anteipsum.co.uk', '16021114 9398', '933-4291 Lobortis St.', 'SLQ91LON9DN'),
('D7Q 9W64', 'Bell Mack', 'Nam.porttitor.scelerisque@faucibus.net', '16710908 1757', 'Ap #772-9314 Et Road', 'JMN59ICT1UF'),
('D7Q 9W65', 'Amelia Matthews', 'sed.hendrerit@Sednulla.org', '16560403 6805', '904-6082 Nec Rd.', 'GGP82GQS4EU'),
('D7Q 9W66', 'May Mullen', 'Nunc.sed.orci@Morbisitamet.net', '16600825 0133', '2891 Aliquam Rd.', 'CHV88GQV7XB'),
('D7Q 9W67', 'Phyllis Lynn', 'mauris@adipiscingfringillaporttitor.edu', '16661230 4623', '468-9541 Non, St.', 'RRZ91DTO0RO'),
('D7Q 9W68', 'Abra Anderson', 'ultrices@dolornonummy.edu', '16301120 4579', 'Ap #975-9287 Aenean Rd.', 'YGT39PTD9SC'),
('D7Q 9W69', 'Demetria George', 'nunc@euismodenimEtiam.edu', '16790817 5487', 'P.O. Box 739, 3257 Turpis St.', 'MRG50UDU9UR'),
('D7Q 9W7', 'Madaline Pierce', 'vestibulum@posuere.org', '16330502 5896', 'P.O. Box 367, 6381 Porttitor Rd.', 'BCW36UUT9AN'),
('D7Q 9W70', 'Kameko Schroeder', 'risus.at.fringilla@ipsum.edu', '16240427 4074', 'P.O. Box 955, 7998 Felis Av.', 'CBI35LYH0NK'),
('D7Q 9W71', 'Aubrey Duncan', 'ornare.In.faucibus@sem.co.uk', '16410706 9645', 'P.O. Box 521, 8309 A, Street', 'RDD75QOW1OF'),
('D7Q 9W72', 'Autumn Estes', 'in.aliquet.lobortis@Maecenasliberoest.co.uk', '16740120 2374', '9439 Auctor Ave', 'MWA98FYB9ZC'),
('D7Q 9W73', 'Aileen Hansen', 'senectus@nibh.net', '16420514 5966', 'P.O. Box 100, 4912 Aliquet Rd.', 'OFX88DVD1SQ'),
('D7Q 9W74', 'Victoria Salas', 'purus@magnaDuis.edu', '16660114 9666', 'P.O. Box 440, 9053 Libero Av.', 'WFN26ZXS1MP'),
('D7Q 9W75', 'Alexandra Winters', 'lectus@lacinia.com', '16150128 4481', '5505 Nibh Rd.', 'ZOF94NCS0HG'),
('D7Q 9W76', 'Venus Baird', 'metus.facilisis@urnaNunc.net', '16270902 3473', '587-8986 Auctor Rd.', 'XDD32ZAB3ZL'),
('D7Q 9W77', 'Ifeoma Hobbs', 'semper@sitamet.org', '16990527 4628', 'Ap #237-3835 Elementum, Ave', 'RIO63KEJ8EQ'),
('D7Q 9W78', 'Vivian Donaldson', 'per.conubia.nostra@dictumcursusNunc.net', '16860509 1282', 'Ap #444-8853 Quis Rd.', 'HDB87EHO6YO'),
('D7Q 9W79', 'Britanney Baird', 'lobortis.nisi@Uttincidunt.co.uk', '16170628 3007', '8757 Neque. St.', 'WAK97MHL6NV'),
('D7Q 9W8', 'Maile Rush', 'pede@egestas.com', '16420411 9079', '928-3288 Nunc Av.', 'APQ07XUK3HM'),
('D7Q 9W80', 'Alexis Hyde', 'mi@netusetmalesuada.net', '16240812 1347', '402-338 Pede Rd.', 'SFI98XPG3RL'),
('D7Q 9W81', 'Oprah Vasquez', 'semper@ligulaAliquamerat.ca', '16520906 5084', 'Ap #651-4979 Quam, St.', 'HHF22UIB8II'),
('D7Q 9W82', 'Giselle Booth', 'lorem.eget.mollis@Craseget.net', '16991029 3746', 'P.O. Box 112, 4906 Egestas. Av.', 'NXA11DYE6WU'),
('D7Q 9W83', 'Jamalia Crawford', 'dui@acorci.ca', '16171018 6774', 'P.O. Box 412, 6580 Iaculis Av.', 'ELT99JJX5TJ'),
('D7Q 9W84', 'Alma Burke', 'non.vestibulum@pedeSuspendissedui.com', '16531101 7411', 'Ap #118-6659 Nunc Rd.', 'FBZ84MGX5UE'),
('D7Q 9W85', 'Ori Rivera', 'Nunc@tincidunt.co.uk', '16790704 3942', 'Ap #543-4666 Scelerisque Avenue', 'UPB13TQR3AT'),
('D7Q 9W86', 'Rebekah Colon', 'erat@blandit.ca', '16151220 0146', 'P.O. Box 661, 8358 Molestie. Ave', 'IUF78XAB7MF'),
('D7Q 9W87', 'Florence Cross', 'Integer.mollis.Integer@ligula.com', '16551106 8180', '606 Feugiat Ave', 'SVU46FRQ4NY'),
('D7Q 9W88', 'Adena Mccarty', 'eget.venenatis.a@imperdiet.co.uk', '16171221 1026', '7791 Enim. St.', 'VSB79XSD4YN'),
('D7Q 9W89', 'Mira Patel', 'ultricies.dignissim@feugiat.edu', '16770908 8780', 'P.O. Box 503, 7673 Commodo Road', 'GXN31IVR8HK'),
('D7Q 9W9', 'Alea Burgess', 'ut@acarcuNunc.com', '16170909 1167', '9702 Diam Road', 'GKW70KPR1NP'),
('D7Q 9W90', 'Serina Bell', 'a@ullamcorper.edu', '16460612 0873', 'Ap #695-2804 Ut Rd.', 'DFE51BOK5MZ'),
('D7Q 9W91', 'Meredith Sargent', 'penatibus.et.magnis@Fuscemilorem.ca', '16170116 5019', 'Ap #911-9966 Ac Rd.', 'QWA23BNO1ZR'),
('D7Q 9W92', 'Selma Schultz', 'et.magnis.dis@fames.net', '16340504 6941', 'Ap #784-2509 Egestas. St.', 'AZO22ETX3WN'),
('D7Q 9W93', 'Xyla Bates', 'sed.hendrerit@Nullatinciduntneque.co.uk', '16130516 2966', 'Ap #897-2363 Aenean Av.', 'AYN14PQI2ZG'),
('D7Q 9W94', 'Petra Gaines', 'mauris.ipsum@tortorat.edu', '16800517 6253', '6080 Elementum St.', 'DAG18QBK2RO'),
('D7Q 9W95', 'Ivy Ramos', 'Phasellus.libero@faucibus.edu', '16001209 6368', 'Ap #587-4887 Faucibus Avenue', 'MNG54BHO8EI'),
('D7Q 9W96', 'Paula Weber', 'vel.pede@eu.edu', '16650607 8606', 'Ap #933-7117 Ante, Street', 'UZV96WYD0WG'),
('D7Q 9W97', 'Octavia Joseph', 'bibendum.fermentum.metus@Vestibulum.org', '16080229 2037', '244-2364 Pellentesque Rd.', 'JBX22WUR6WG'),
('D7Q 9W98', 'Hedy Prince', 'Etiam.gravida@velitCras.co.uk', '16000606 2434', '693-8332 Enim Street', 'ZDT09ISA8CY'),
('D7Q 9W99', 'Dawn Mcintosh', 'ornare.lectus@egestas.co.uk', '16230408 8517', 'Ap #627-6700 Varius Rd.', 'PND37NKW0KV'),
('D9Y 0U0', 'Robin Ortega', 'lectus@DonecnibhQuisque.co.uk', '16381123 6474', '209-6103 Eget Rd.', 'EYI55CKX2XF'),
('E0N 8K0', 'Nelle Goodwin', 'Cras.vehicula@mattisornare.net', '16660421 6751', '6771 Rhoncus Rd.', 'MZB09OWT2YH'),
('E1J 2H8', 'Kiara Benton', 'sed.libero.Proin@necmetusfacilisis.co.uk', '16601105 8366', 'Ap #185-2304 Aliquet. Ave', 'VKS66YKQ3IK'),
('E3K 3Z0', 'Quon Mitchell', 'a@mauris.com', '16380405 5576', 'Ap #107-3499 Sed Av.', 'NPX48BAQ1OL'),
('E3T 8R3', 'Paloma Alexander', 'sed.dui.Fusce@nec.net', '16250514 6908', '891-3801 Orci Road', 'MPW23TCD6ZW'),
('E3W 2R6', 'Xyla Hayden', 'id.nunc.interdum@rutrumjusto.net', '16321219 4009', 'P.O. Box 829, 1360 Amet, Rd.', 'XFW26YGG8SG'),
('E5G 0M8', 'Ina Kirkland', 'turpis.egestas.Aliquam@loremeumetus.com', '16110325 4353', 'P.O. Box 951, 440 Pede, St.', 'KMO02JTS8XU'),
('EUCS85230062', 'Simón Esquivel Cirion', 'blorem@blorem.gov', '7550424203', 'Avenida Lorem, 119A 9ºA', 'FnXR$rHVEB9k*rwMX!IQ'),
('F5B 8E4', 'Katelyn Carroll', 'eu.neque.pellentesque@egetmassa.ca', '16440921 6324', '957-400 Adipiscing Road', 'DYY80VKT1YT'),
('F5D 6A0', 'Leandra Galloway', 'dolor.Fusce.feugiat@cursus.com', '16351023 8201', '7752 Volutpat. Rd.', 'CZC29XWE4PR'),
('F5V 7K7', 'Autumn Mckenzie', 'Aliquam.erat.volutpat@aliquet.org', '16600206 0249', 'Ap #411-5071 Pellentesque Avenue', 'SBI02UWD4NE'),
('F8D 1C6', 'Chastity Puckett', 'placerat.velit.Quisque@Fusce.ca', '16140116 2134', '856-535 Senectus St.', 'ZDU82PYA5JF'),
('F9I 8D2', 'Pamela Herman', 'id@semper.co.uk', '16200521 5922', 'P.O. Box 944, 7482 Nec Ave', 'MYM30JQH4FV'),
('G1D 1A9', 'Sloane Buckner', 'erat.eget.tincidunt@Fuscealiquetmagna.com', '16570622 8490', '436-3918 Nascetur Av.', 'PNF47JOB1IN'),
('G8D 9V8', 'Rhona Bennett', 'mauris.blandit@interdum.com', '16001128 2712', '2741 Quis Ave', 'EHL75WZL6OA'),
('H2F 8G0', 'Jolie Mejia', 'eget.massa@Nullasempertellus.net', '16090225 5330', 'P.O. Box 169, 1950 Gravida Road', 'CSZ58EWV5UL'),
('H6F 0D0', 'Demetria Ayers', 'mauris.Integer.sem@justoProin.org', '16910528 3247', '1697 Nonummy Av.', 'EXO74YHU0ME'),
('H7M 7J7', 'Iola Mcdonald', 'dictum@vulputate.ca', '16000216 5108', '5497 Viverra. St.', 'BDY20PIL0OT'),
('H8H 6T7', 'Kylee Schroeder', 'molestie.Sed.id@facilisiSed.net', '16790814 8922', '5128 Ipsum. Rd.', 'CCY93OLD9QD'),
('I0K 6T8', 'Ori Moody', 'nec.ligula.consectetuer@ipsum.net', '16770812 8611', 'P.O. Box 160, 9514 Quam Rd.', 'SPK15YYF6ZC'),
('I0R 8W0', 'Daria Roberson', 'quam.a.felis@vitaedolorDonec.org', '16150407 8880', '418-5241 Nibh Av.', 'SAS95QCT9VI'),
('I1U 7M3', 'Zenaida Daniels', 'at@cursusin.edu', '16141227 6063', 'Ap #153-9253 Quisque Rd.', 'VIS07ACC4BF'),
('I5M 8J4', 'Lunea Downs', 'non@necurnasuscipit.ca', '16630612 3222', '877-2299 Cursus. Avenue', 'STX13VMP8LW'),
('I9D 7S6', 'Hilary Lane', 'nunc.nulla@aliquet.net', '16760611 9852', 'Ap #414-3205 Ridiculus Rd.', 'DYA10YBK5CO'),
('J1Y 9S9', 'Kirsten Kelly', 'vulputate@ligula.net', '16420206 7387', 'Ap #266-5088 Pede Avenue', 'ZQJ60WHT2GL'),
('J6R 8E2', 'Giselle Snyder', 'sem.Pellentesque@AeneanmassaInteger.ca', '16290414 1302', 'Ap #398-5857 Phasellus Street', 'VMZ55MDB2OG'),
('J8H 3J1', 'Mechelle Hartman', 'ligula.eu.enim@orcisemeget.org', '16270516 3703', 'P.O. Box 924, 2648 Interdum. Ave', 'LUE44TRY2QY'),
('K1J 6I7', 'Yeo Grimes', 'et@rhoncus.ca', '16680917 8293', '930-6206 Dignissim Rd.', 'RXG89YPZ6NX'),
('K2Y 2I7', 'Lana Wooten', 'volutpat.ornare.facilisis@lobortisnisinibh.ca', '16480601 8240', '129-3853 Non Rd.', 'RED59APG6FP'),
('K8C 0C6', 'Jamalia White', 'posuere.enim@Sedauctor.co.uk', '16520614 3918', 'P.O. Box 853, 1251 Integer St.', 'QLP48NIM4OB'),
('K8L 9N6', 'Mollie Chavez', 'pharetra.ut.pharetra@etultrices.com', '16481108 8600', '1548 Quisque Rd.', 'XBC91WNQ6QB'),
('L0T 2X8', 'Lillith Moses', 'Cras.eu@turpisegestas.net', '16300304 2565', '112-1578 Enim, Road', 'ONP50HJH5CW'),
('L2Q 0X8', 'Brynne Rhodes', 'diam.Pellentesque.habitant@dolorQuisquetincidunt.com', '16530314 8455', '7165 Lacus. Road', 'WTK78WBF6CR'),
('L4F 3H1', 'Ignacia Whitaker', 'Cum.sociis.natoque@egettincidunt.co.uk', '16580205 0483', '876-7022 Eu, Av.', 'BPT37AXA6FB'),
('M0O 9C5', 'Echo Barker', 'nulla@necimperdietnec.net', '16451007 4372', 'Ap #347-1588 Nec St.', 'SUQ46OHJ4PC'),
('M3C 2M7', 'Aphrodite Winters', 'neque.Nullam@natoquepenatibuset.com', '16380612 2457', 'Ap #215-2267 Nulla. Street', 'VFE39DPQ7PI'),
('M5X 8U0', 'Cheryl Huffman', 'enim@risus.edu', '16150302 7276', '659-618 Tristique Rd.', 'TEW88LTY0IY'),
('M9Z 1V4', 'Quyn Stone', 'egestas.nunc.sed@Proin.com', '16120108 3878', '6104 At Street', 'ZMB07LDB5SD'),
('MIEJ951114028', 'Jimmy Milla Esquivel', 'blorem@blorem.gov', '735220637', 'Alameda Lorem ipsum dolor sit, 94B 1ºG', 'B%XZI%&kHkYTp32zd*xZ'),
('MOMO9285018', 'Oralia Montaño Moron', 'blorem@blorem.net', '8199177375', 'Vía Lorem, 235', 'xB6vv&rkN^Gnb9IO*NHM'),
('N5Q 9L9', 'Fiona Pacheco', 'id.libero@nibhdolor.net', '16731107 9326', '5660 Tellus. Road', 'FVI34ISH1RD'),
('N6B 9B5', 'Hanae Ellis', 'blandit.mattis@consectetuerrhoncus.edu', '16110329 5356', 'Ap #618-5293 Et, Avenue', 'ONJ34CEQ1GW'),
('N6U 2V7', 'Rhiannon Moran', 'libero@fermentummetus.com', '16740314 0762', 'P.O. Box 653, 2947 Sit Ave', 'KBH50GWM9QC'),
('N8H 2O3', 'Cynthia Holcomb', 'venenatis.vel@euduiCum.org', '16011227 2216', 'Ap #405-4463 Pede. Road', 'LKS11EMN8SE'),
('N8L 7J1', 'Anne Warren', 'velit@ac.net', '16630118 3676', 'P.O. Box 558, 4855 In Road', 'KDQ42AYS0HU'),
('N8X 1K7', 'Patience Burnett', 'ac.sem@Nuncullamcorpervelit.ca', '16880218 6299', '1639 Risus. Av.', 'LOL89SSX0KE'),
('NUFM90710005', 'Moisés Nuño Figueruela', 'blorem@blorem.eu', '7906213975', 'Carrer Lorem ipsum dolor, 205', '!DsYDsGK!ohb5urw6Fb@cxcxc'),
('O0X 5G0', 'Bree Gross', 'Ut.tincidunt.vehicula@dictumeu.net', '16920213 8252', 'Ap #190-2729 Sit Road', 'EEY62HFQ2LP'),
('O2B 3Q4', 'Summer Cox', 'eu.nibh@VivamusnisiMauris.edu', '16240223 7198', 'Ap #378-2422 Tristique St.', 'PWR02XEE0XV'),
('O7H 2L8', 'Irene Young', 'orci.tincidunt.adipiscing@necmollis.ca', '16520411 8904', '8545 Hendrerit Rd.', 'XDJ79ITT3YT'),
('O7O 1C6', 'Lavinia Barry', 'mi@Lorem.co.uk', '16481110 3508', 'P.O. Box 719, 2638 Arcu. St.', 'CDU74DHB7JA'),
('OOML769253254', 'Leopoldo Orol Miguelez', 'blorem@blorem.org', '8516737370', 'Carrera Lorem ipsum dolor sit, 23B', 'hSuD$jHR^VoglEP5DtpB'),
('P5B 0K7', 'Kaitlin Mckee', 'nulla@dolor.co.uk', '16940209 6300', '2080 Commodo Road', 'VOG04KVL1UT'),
('P5I 9D1', 'Maggy Buckley', 'vulputate@orciUtsemper.edu', '16971226 2691', 'P.O. Box 971, 5770 Congue. Road', 'WWC48LQU1II'),
('P8X 6D3', 'Audrey Ruiz', 'arcu.Curabitur@sem.org', '16560906 1659', 'P.O. Box 694, 2874 Quisque Road', 'QDK65EMG4RL'),
('P9A 4S8', 'Tana Gilmore', 'Quisque@ipsumnon.net', '16161226 0024', 'P.O. Box 290, 1336 Neque Ave', 'DEY28MKE9AD'),
('Q 9W3', 'Marah Lara', 'Aliquam.erat@Phasellusdolorelit.net', '16690808 7882', '7933 Massa. Street', 'UAP72AJR5HK'),
('Q1D 1A3', 'Shay Fitzpatrick', 'nec.tempus.mauris@Suspendisse.edu', '16410528 6126', 'P.O. Box 666, 985 Eu Av.', 'XIZ48WTN0UI'),
('Q2N 4X8', 'Kay Castillo', 'lorem.ipsum.sodales@condimentumDonecat.org', '16750327 4776', '1922 Sollicitudin Avenue', 'BZN91EVM6BH'),
('Q8M 0Y6', 'Cassandra Maxwell', 'gravida.non.sollicitudin@utlacus.org', '16561111 4579', '612-2607 Et St.', 'DIM83UAY3NV'),
('R1K 4L1', 'Ariana Guerra', 'pharetra.Nam@Cras.ca', '16200515 7975', 'P.O. Box 124, 9441 Donec Road', 'FSC90WMA6WE'),
('R1R 4J3', 'Amelia William', 'Cras.eget@QuisquevariusNam.co.uk', '16540912 9805', '2874 Sit Av.', 'LGN49SAU7CV'),
('R2W 2T6', 'Yvonne Alford', 'lacus.Quisque.imperdiet@inmagnaPhasellus.co.uk', '16910326 8562', '6863 Nulla St.', 'XWT53ZFA5EY'),
('RESA651220122', 'Amparo Recondo Salamanca', 'blorem@blorem.org', '6579680162', 'Carrera Lorem ipsum dolor, 140A 16ºB', '8J&lxzVr2KMc4WvF4o$b'),
('RUEB865200123', 'Blas Ruedas Ecija', 'blorem@blorem.com', '6816163497', 'Glorieta Lorem, 239B', '!AJ1FTBqKxTDZmUDJEPf'),
('SICL7998345', 'Lila Sirgo Cuadro', 'blorem@blorem.eu', '8707398590', 'Rambla Lorem ipsum dolor sit, 102 9ºE', '%jHCvok$3^lpUtNiwTmr'),
('T1M 4M4', 'Alice Hill', 'sed.libero@Fuscediamnunc.edu', '16110118 7837', 'Ap #163-1998 Ac Road', 'QBK77MXL6FH'),
('T2Q 8O5', 'Stephanie Leach', 'sem@aliquetliberoInteger.org', '16250809 9708', '856-6704 Feugiat. Av.', 'XQK90GNF4DH'),
('T3M 8S5', 'Charde Avila', 'nunc.sed.pede@In.ca', '16340917 8765', 'P.O. Box 552, 6709 Dapibus Avenue', 'SSK37TJW3ID'),
('T4C 3E6', 'Natalie Coleman', 'enim.commodo.hendrerit@non.ca', '16730702 4989', 'P.O. Box 689, 3460 Suspendisse St.', 'DXU26BQV2EE'),
('U0H 0J0', 'Adrienne Berger', 'rutrum.justo@mattisInteger.com', '16510125 7060', 'Ap #251-8448 Sociosqu Avenue', 'ORF02DWU0HW'),
('U0K 2Q7', 'Shay Meyers', 'sem.eget@fringilla.co.uk', '16900108 8757', 'P.O. Box 917, 5627 Proin Road', 'ISZ78DUB2EZ'),
('U2M 3K2', 'Hiroko Bond', 'morbi@et.com', '16220610 0618', '838-6597 Ut, Av.', 'MPV45MIX5AG'),
('U3Y 7D2', 'Kendall Joyce', 'egestas@etmagnisdis.com', '16860106 7989', '4832 Ullamcorper, St.', 'RWR55AKD8CR'),
('U8F 3L6', 'Odessa Stark', 'eget.lacus@non.org', '16550307 8320', '303-1837 Aliquam Street', 'UIP64QTE6WE'),
('U9G 7H9', 'Dominique Gilbert', 'Sed.et@porttitor.net', '16280128 5046', 'Ap #561-8777 Nullam Street', 'BDM00ODU1LI'),
('V8E 3T0', 'Sopoline Clements', 'sem@Sed.co.uk', '16120803 0120', 'P.O. Box 375, 6956 Nam Ave', 'LQC74LLO8VF'),
('W2A 2P3', 'Minerva Carney', 'Fusce.aliquet@utpellentesque.com', '16511101 0830', 'Ap #454-7955 Accumsan Rd.', 'YHW56DET2QH'),
('W4Y 2M3', 'Indira Levine', 'Mauris.molestie@mattisornarelectus.co.uk', '16910617 5681', 'P.O. Box 872, 5697 Nascetur Avenue', 'WZI33VLY5FZ'),
('W8G 7Y4', 'Callie Robertson', 'Maecenas.mi@pede.com', '16630108 3793', 'Ap #957-8226 Libero Road', 'UUD65SIF1JH'),
('X2K 9H2', 'Sandra Carter', 'eros@dolorFuscemi.co.uk', '16161225 5776', 'Ap #275-8676 Nunc Rd.', 'RXV86QLV4TX'),
('X9I 8K1', 'Jemima Thompson', 'senectus.et@accumsan.edu', '16620302 2659', 'P.O. Box 932, 8433 Ipsum Road', 'SPO51SXQ4EX'),
('Y0D 0Q0', 'Xerxes Slater', 'purus.accumsan@feugiatSed.net', '16430913 6259', '843-5795 Egestas, St.', 'CGT97JBG5ZU'),
('Y4S 2F9', 'Hillary Hodge', 'luctus@ligula.ca', '16700308 2539', 'Ap #212-7604 A St.', 'DCZ43JLL8JB'),
('Y5G 3F9', 'Brenna Moss', 'ut@Cras.edu', '16530629 6715', '120-1446 Dictum St.', 'HLM55WBJ5SH'),
('Z3D 7B2', 'Kirsten West', 'dictum.eleifend@Fuscefeugiat.net', '16930208 2624', 'P.O. Box 872, 2476 Pellentesque Av.', 'ZAP49TDP5OQ'),
('Z4A 0P8', 'Sydnee Cook', 'ante.iaculis@enimcondimentum.net', '16451030 9810', 'P.O. Box 398, 9862 Nam Av.', 'AGI75VFO4JK'),
('Z6W 9G9', 'Priscilla Whitney', 'odio.Aliquam.vulputate@feugiat.net', '16980919 0029', '606-6387 Parturient Rd.', 'QUT15XKM1TY'),
('Z8K 7K4', 'Abra Cohen', 'lobortis.nisi@semperet.net', '16810402 6045', '176 Integer Street', 'EHW98UVM5IU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_rolesusuarios`
--

CREATE TABLE `usuarios_rolesusuarios` (
  `id_usuario_rolusuario` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_usuario` varchar(13) COLLATE utf8_bin NOT NULL,
  `id_rolusuario` varchar(13) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios_rolesusuarios`
--

INSERT INTO `usuarios_rolesusuarios` (`id_usuario_rolusuario`, `id_usuario`, `id_rolusuario`) VALUES
('regca001', 'RUEB865200123', 'caru1'),
('regca002', 'SICL7998345', 'caru2'),
('regca003', 'NUFM90710005', 'caru4'),
('regca004', 'EUCS85230062', 'caru3'),
('regca005', 'OOML769253254', 'caru2'),
('regca006', 'MOMO9285018', 'caru1'),
('regca007', 'MIEJ951114028', 'caru4'),
('regca008', 'RESA651220122', 'caru3'),
('regca009', 'AICT891216281', 'caru1'),
('regca010', 'AICC8333042', 'caru2'),
('regca011', 'D7Q 9W3', 'caru2'),
('regca012', 'D7Q 9W4', 'caru4'),
('regca013', 'D7Q 9W5', 'caru3'),
('regca014', 'D7Q 9W6', 'caru1'),
('regca015', 'D7Q 9W7', 'caru2'),
('regca016', 'D7Q 9W8', 'caru4'),
('regca017', 'D7Q 9W9', 'caru2'),
('regca018', 'D7Q 9W10', 'caru3'),
('regca019', 'D7Q 9W11', 'caru1'),
('regca020', 'D7Q 9W12', 'caru1'),
('regca021', 'D7Q 9W13', 'caru1'),
('regca022', 'D7Q 9W14', 'caru4'),
('regca023', 'D7Q 9W15', 'caru3'),
('regca024', 'D7Q 9W16', 'caru2'),
('regca025', 'D7Q 9W17', 'caru1'),
('regca026', 'D7Q 9W18', 'caru2'),
('regca027', 'D7Q 9W19', 'caru3'),
('regca028', 'D7Q 9W20', 'caru4'),
('regca029', 'D7Q 9W21', 'caru2'),
('regca030', 'D7Q 9W22', 'caru4'),
('regca031', 'D7Q 9W23', 'caru3'),
('regca032', 'D7Q 9W24', 'caru4'),
('regca033', 'D7Q 9W25', 'caru2'),
('regca034', 'D7Q 9W26', 'caru4'),
('regca035', 'D7Q 9W27', 'caru1'),
('regca036', 'D7Q 9W28', 'caru2'),
('regca037', 'D7Q 9W29', 'caru1'),
('regca038', 'D7Q 9W30', 'caru2'),
('regca039', 'D7Q 9W31', 'caru1'),
('regca040', 'D7Q 9W32', 'caru2'),
('regca041', 'D7Q 9W33', 'caru3'),
('regca042', 'D7Q 9W34', 'caru4'),
('regca043', 'D7Q 9W35', 'caru2'),
('regca044', 'D7Q 9W36', 'caru4'),
('regca045', 'D7Q 9W37', 'caru3'),
('regca046', 'D7Q 9W38', 'caru1'),
('regca047', 'D7Q 9W39', 'caru1'),
('regca048', 'D7Q 9W40', 'caru2'),
('regca049', 'D7Q 9W41', 'caru1'),
('regca050', 'D7Q 9W42', 'caru1'),
('regca051', 'D7Q 9W43', 'caru1'),
('regca052', 'D7Q 9W44', 'caru2'),
('regca053', 'D7Q 9W45', 'caru2'),
('regca054', 'D7Q 9W46', 'caru2'),
('regca055', 'D7Q 9W47', 'caru2'),
('regca056', 'D7Q 9W48', 'caru1'),
('regca057', 'D7Q 9W49', 'caru2'),
('regca058', 'D7Q 9W50', 'caru1'),
('regca059', 'D7Q 9W51', 'caru2'),
('regca060', 'D7Q 9W52', 'caru1'),
('regca061', 'D7Q 9W53', 'caru2'),
('regca062', 'D7Q 9W54', 'caru1'),
('regca063', 'D7Q 9W55', 'caru2'),
('regca064', 'D7Q 9W56', 'caru1'),
('regca065', 'D7Q 9W57', 'caru2'),
('regca066', 'D7Q 9W58', 'caru1'),
('regca067', 'D7Q 9W59', 'caru1'),
('regca068', 'D7Q 9W60', 'caru2'),
('regca069', 'D7Q 9W61', 'caru1'),
('regca070', 'D7Q 9W62', 'caru2'),
('regca071', 'D7Q 9W63', 'caru1'),
('regca072', 'D7Q 9W64', 'caru2'),
('regca073', 'D7Q 9W65', 'caru1'),
('regca074', 'D7Q 9W66', 'caru2'),
('regca075', 'D7Q 9W67', 'caru1'),
('regca076', 'D7Q 9W68', 'caru2'),
('regca077', 'D7Q 9W69', 'caru1'),
('regca078', 'D7Q 9W70', 'caru2'),
('regca079', 'D7Q 9W71', 'caru1'),
('regca080', 'D7Q 9W72', 'caru2'),
('regca081', 'D7Q 9W73', 'caru1'),
('regca082', 'D7Q 9W74', 'caru2'),
('regca083', 'D7Q 9W75', 'caru1'),
('regca084', 'D7Q 9W76', 'caru2'),
('regca085', 'D7Q 9W77', 'caru1'),
('regca086', 'D7Q 9W78', 'caru2'),
('regca087', 'D7Q 9W79', 'caru1'),
('regca088', 'D7Q 9W80', 'caru2'),
('regca089', 'D7Q 9W81', 'caru1'),
('regca090', 'D7Q 9W82', 'caru2'),
('regca091', 'D7Q 9W83', 'caru1'),
('regca092', 'D7Q 9W84', 'caru2'),
('regca093', 'D7Q 9W85', 'caru1'),
('regca094', 'D7Q 9W86', 'caru2'),
('regca095', 'D7Q 9W87', 'caru1'),
('regca096', 'D7Q 9W88', 'caru2'),
('regca097', 'D7Q 9W89', 'caru1'),
('regca098', 'D7Q 9W90', 'caru2'),
('regca099', 'D7Q 9W91', 'caru1'),
('regca100', 'D7Q 9W92', 'caru1'),
('regca101', 'D7Q 9W93', 'caru2'),
('regca102', 'D7Q 9W94', 'caru1'),
('regca103', 'D7Q 9W95', 'caru2'),
('regca104', 'D7Q 9W96', 'caru1'),
('regca105', 'D7Q 9W97', 'caru1'),
('regca106', 'D7Q 9W98', 'caru2'),
('regca107', 'D7Q 9W99', 'caru2'),
('regca108', 'D7Q 9W100', 'caru2'),
('regca109', 'D7Q 9W101', 'caru1'),
('regca110', 'D7Q 9W102', 'caru1'),
('regca111', 'V8E 3T0', 'caru2'),
('regca112', 'D2B 3D7', 'caru1'),
('regca113', 'N8H 2O3', 'caru2'),
('regca114', 'Q1D 1A3', 'caru2'),
('regca115', 'D5A 8X1', 'caru3'),
('regca116', 'H7M 7J7', 'caru4'),
('regca117', 'N5Q 9L9', 'caru3'),
('regca118', 'B2Y 9N5', 'caru4'),
('regca119', 'K2Y 2I7', 'caru3'),
('regca120', 'Z4A 0P8', 'caru4'),
('regca121', 'Y5G 3F9', 'caru2'),
('regca122', 'E5G 0M8', 'caru3'),
('regca123', 'N6B 9B5', 'caru4'),
('regca124', 'B8L 6S3', 'caru2'),
('regca125', 'L0T 2X8', 'caru1'),
('regca126', 'B0B 8L4', 'caru2'),
('regca127', 'E1J 2H8', 'caru3'),
('regca128', 'I9D 7S6', 'caru4'),
('regca129', 'G1D 1A9', 'caru2'),
('regca130', 'U0H 0J0', 'caru1'),
('regca131', 'D1Q 6D3', 'caru3'),
('regca132', 'F9I 8D2', 'caru2'),
('regca133', 'E3K 3Z0', 'caru4'),
('regca134', 'F8D 1C6', 'caru3'),
('regca135', 'C0T 6F4', 'caru2'),
('regca136', 'M0O 9C5', 'caru1'),
('regca137', 'U9G 7H9', 'caru3'),
('regca138', 'K8L 9N6', 'caru2'),
('regca139', 'N8L 7J1', 'caru4'),
('regca140', 'B5P 9Z2', 'caru3'),
('regca141', 'U0K 2Q7', 'caru2'),
('regca142', 'P5B 0K7', 'caru1'),
('regca143', 'T3M 8S5', 'caru2'),
('regca144', 'I1U 7M3', 'caru3'),
('regca145', 'D4D 1J0', 'caru4'),
('regca146', 'Y4S 2F9', 'caru3'),
('regca147', 'X9I 8K1', 'caru2'),
('regca148', 'T2Q 8O5', 'caru3'),
('regca149', 'H8H 6T7', 'caru4'),
('regca150', 'U8F 3L6', 'caru3'),
('regca151', 'M9Z 1V4', 'caru2'),
('regca152', 'E3T 8R3', 'caru1'),
('regca153', 'E3W 2R6', 'caru2'),
('regca154', 'F5B 8E4', 'caru3'),
('regca155', 'L4F 3H1', 'caru1'),
('regca156', 'K1J 6I7', 'caru1'),
('regca157', 'L2Q 0X8', 'caru1'),
('regca158', 'I0K 6T8', 'caru1'),
('regca159', 'X2K 9H2', 'caru1'),
('regca160', 'Y0D 0Q0', 'caru2'),
('regca161', 'E0N 8K0', 'caru2'),
('regca162', 'O7H 2L8', 'caru2'),
('regca163', 'R1R 4J3', 'caru3'),
('regca164', 'F5V 7K7', 'caru4'),
('regca165', 'N8X 1K7', 'caru3'),
('regca166', 'P8X 6D3', 'caru1'),
('regca167', 'B0R 7M2', 'caru1'),
('regca168', 'F5D 6A0', 'caru1'),
('regca169', 'Z6W 9G9', 'caru2'),
('regca170', 'W2A 2P3', 'caru2'),
('regca171', 'J6R 8E2', 'caru2'),
('regca172', 'R1K 4L1', 'caru3'),
('regca173', 'M5X 8U0', 'caru3'),
('regca174', 'K8C 0C6', 'caru4'),
('regca175', 'N6U 2V7', 'caru2'),
('regca176', 'A3S 8H8', 'caru1'),
('regca177', 'W8G 7Y4', 'caru2'),
('regca178', 'D0A 1V0', 'caru4'),
('regca179', 'M3C 2M7', 'caru3'),
('regca180', 'D9Y 0U0', 'caru2'),
('regca181', 'B0W 4G7', 'caru2'),
('regca182', 'J1Y 9S9', 'caru2'),
('regca183', 'W4Y 2M3', 'caru2'),
('regca184', 'O2B 3Q4', 'caru2'),
('regca185', 'A3G 0L5', 'caru1'),
('regca186', 'P5I 9D1', 'caru2'),
('regca187', 'D2R 7G9', 'caru3'),
('regca188', 'T4C 3E6', 'caru2'),
('regca189', 'J8H 3J1', 'caru1'),
('regca190', 'U2M 3K2', 'caru1'),
('regca191', 'U3Y 7D2', 'caru2'),
('regca192', 'D2S 0Z3', 'caru3'),
('regca193', 'O7O 1C6', 'caru3'),
('regca194', 'T1M 4M4', 'caru4'),
('regca195', 'I0R 8W0', 'caru4'),
('regca196', 'H6F 0D0', 'caru2'),
('regca197', 'I5M 8J4', 'caru1'),
('regca198', 'Q8M 0Y6', 'caru2'),
('regca199', 'D6T 5P8', 'caru3'),
('regca200', 'Z8K 7K4', 'caru3'),
('regca201', 'H2F 8G0', 'caru4'),
('regca202', 'D3K 5I2', 'caru4'),
('regca203', 'R2W 2T6', 'caru2'),
('regca204', 'G8D 9V8', 'caru3'),
('regca205', 'O0X 5G0', 'caru3'),
('regca206', 'P9A 4S8', 'caru4'),
('regca207', 'C5B 0R0', 'caru4'),
('regca208', 'Q2N 4X8', 'caru2'),
('regca209', 'Z3D 7B2', 'caru2'),
('regca210', 'A9P 2H0', 'caru2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vista_agricultor`
--

CREATE TABLE `vista_agricultor` (
  `id_agricultor` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `nombre_usuario` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email_usuario` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `telefono_usuario` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL,
  `direccion_usuario` varchar(200) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vista_asesor`
--

CREATE TABLE `vista_asesor` (
  `id_asesor` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `nombre_usuario` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email_usuario` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `telefono_usuario` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL,
  `direccion_usuario` varchar(200) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vista_envase_unidades`
--

CREATE TABLE `vista_envase_unidades` (
  `valor_unidad` enum('litros','gramos') COLLATE latin1_spanish_ci DEFAULT NULL,
  `valor_envase` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vista_grupos_afecciones`
--

CREATE TABLE `vista_grupos_afecciones` (
  `Numero de control` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Tipo` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Familia` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vista_huertos`
--

CREATE TABLE `vista_huertos` (
  `numero de huerto` int(11) DEFAULT NULL,
  `cultivo` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `nombre del agricultor` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `ubicacion` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estado` enum('sembrando','cosechando') COLLATE latin1_spanish_ci DEFAULT NULL,
  `duracion del cultivo` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vista_presentaciones`
--

CREATE TABLE `vista_presentaciones` (
  `Numero de control` varchar(13) COLLATE latin1_spanish_ci DEFAULT NULL,
  `marca_producto` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `valor_envase` varchar(20) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Presentacion` varchar(19) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `afecciones_tipos_afecciones`
--
ALTER TABLE `afecciones_tipos_afecciones`
  ADD PRIMARY KEY (`id_afecciones_tipos_afeccion`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id_calificacion`);

--
-- Indices de la tabla `detalles_dictamenes`
--
ALTER TABLE `detalles_dictamenes`
  ADD PRIMARY KEY (`id_detalle_dictamen`);

--
-- Indices de la tabla `detalles_recetas`
--
ALTER TABLE `detalles_recetas`
  ADD PRIMARY KEY (`id_detalle_receta`);

--
-- Indices de la tabla `dictamenes`
--
ALTER TABLE `dictamenes`
  ADD PRIMARY KEY (`id_dictamen`);

--
-- Indices de la tabla `lider_temporal`
--
ALTER TABLE `lider_temporal`
  ADD PRIMARY KEY (`id_lider_temporal`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id_receta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
