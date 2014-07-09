<!doctype html>
<html lang="en" class="no-js">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="author" href="<?php bloginfo('url'); ?>/humans.txt" />
<meta name="generator" content="WordPress" />

<!--[if IE]><![endif]-->

<title><?php wp_title( '|', true, 'right' ); ?> <?php bloginfo('name'); ?></title>

<!-- Mobile specific -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0<?php if (is_mobile()) echo ", minimal-ui"; ?>">

<!-- Stylesheets and Icons -->
<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/favicon.ico">
<link rel="apple-touch-icon" href="<?php bloginfo('template_url'); ?>/apple-touch-icon.png">

<!-- Compiled SCSS -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css">

<!-- Start Wordpress Head -->
<?php wp_head(); ?>
<!-- End Wordpress Head -->

<!-- Backup jQuery -->
<script>window.jQuery || document.write('<script src="<?php echo bloginfo('url'); ?>/wp-includes/js/jquery/jquery.js"><\/script>')</script>

<!--[if lte IE 8]>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/vendor/rem-unit-polyfill/js/rem.min.js"></script>
<![endif]-->

</head>

<!--[if IE 8 ]><body <?php body_class('ie8'); ?>><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<body <?php body_class(); ?>><!--<![endif]-->

<div id="page-wrapper">

	<div class="wrapper" id="header-wrapper">

		<header class="section" id="header" role="banner">

			<div class="section-content" id="header-content">

				<div id="logo">

					<a href="<?php bloginfo('url'); ?>/">

						<img src="<?php bloginfo('template_url'); ?>/logo.png" alt="<?php wp_title(); ?> Logo" title="<?php wp_title(); ?>"/>

						<h1><?php echo bloginfo('title'); ?></h1>

					</a>

				</div>

			</div>

		</header>

	</div>

	<div class="wrapper" id="nav-wrapper">

		<div class="menu-header">

			<nav id="main-nav" role="navigation">

				<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary', 'container' => 'false' ) ); ?>

			</nav>

		</div>

	</div>

	<?php if (is_front_page()): ?>

		<?php get_template_part('banner'); ?>

	<?php endif; ?>
