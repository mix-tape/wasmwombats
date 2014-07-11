<?php get_header(); ?>

	<div class="wrapper" id="main-wrapper">

		<div class="section" id="main">

			<div class="section-content" id="main-content">

				<section id="content" role="main" class="full-width">

					<?php if ( have_posts() ) { while ( have_posts() ) { the_post(); ?>

					<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

						<header>

							<h2><?php the_title(); ?></h2>
							<p class="byline"><?php the_field('byline'); ?></p>

						</header>

						<?php get_template_part('content', 'blocks'); ?>

						<?php $sponsor_classes = array(
																					 "Gold Sponsors" => "gold_sponsors",
																					 "Silver Sponsors" => "silver_sponsors",
																					 "Bronze Sponsors" => "bronze_sponsors",
																					);
						?>


						<?php foreach ($sponsor_classes as $title => $field) { ?>

							<?php if( have_rows($field) ): ?>

								<h3 class="sponsor-title <?php echo $field ?>"><?php echo $title ?></h3>

								<ul class="sponsor-list">

								<?php while ( have_rows($field) ) : the_row();

									$image = get_sub_field('logo'); ?>

									<li class="sponsor">

										<a href="<?php the_sub_field('link'); ?>" target="_blank">

											<img src="<?php echo $image['url']; ?>" alt="Logo for <?php the_sub_field('link'); ?>" />

										</a>

									</li>

								<?php endwhile; ?>

								</ul>

							<?php endif; ?>

						<?php } ?>

					</article>

					<?php } } ?>

				</section>

			</div><!-- End #main-content -->

		</div><!-- End #main -->

	</div><!-- End #main-wrapper -->

<?php get_footer(); ?>
