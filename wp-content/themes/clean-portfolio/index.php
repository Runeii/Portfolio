<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Andrew Hill</title>
        <meta name="description" content="Developer, designer, music weirdo">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:title" content="Andrew Hill">
        <meta property="og:url" content="https://www.andrewthomashill.co.uk/">
        <meta property="og:site_name" content="Andrew Hill">
        <meta property="og:image" content="https://www.andrewthomashill.co.uk/img/meta.png">
        <meta property="og:image:width" content="1204">
        <meta property="og:image:height" content="798">
        <meta property="og:image:type" content="image/png">
        <meta itemprop=ig:description" property="og:description" content="Developer, designer, music weirdo">
        <link rel="stylesheet" href="/stylesheets/main-min.css?v=1.2">
        <script src="https://use.typekit.net/una3rtu.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>
    </head>
    <body class="home">
        <header>
            <h1>Andrew Thomas Hill</h1>
            <p style="display:none">Freelance designer and developer <br />I also run one of the UK's <a href="https://www.crackintheroad.com/">leading new music websites</a></p>
            <div id="fade"></div>
        </header>
        <main>
            <ul class="work">
                <?php
                    if(have_posts()): while(have_posts()): the_post(); 
                ?>
                    <figure>
                        <div class="imagebox">
                        <?php 
                            $attachments = explode(",", get_post_meta(get_the_ID(), 'images', true));
                            if(count($attachments) > 2){
                                $i = 0;
                                if(count($attachments) == 3){
                                    foreach($attachments as $attachment){
                                        if($i == 0) {
                                            echo '<img srcset="' . wp_get_attachment_image_srcset($attachment, large) . '" class="three" />';
                                        } else {
                                            echo '<img data-srcset="' . wp_get_attachment_image_srcset($attachment, large) . '" class="three lazyload" />';
                                        }
                                        $i++;
                                    }
                                } 
                                else {
                                    foreach($attachments as $attachment){
                                        if($i == 0) {
                                            echo '<img srcset="' . wp_get_attachment_image_srcset($attachment, large) . '" class="four" />';
                                        } else {
                                            echo '<img data-srcset="' . wp_get_attachment_image_srcset($attachment, large) . '" class="four lazyload" />';
                                        }
                                        $i++;
                                    }    
                                }
                            } else {
                                echo '<img srcset="' . wp_get_attachment_image_srcset(get_post_thumbnail_id(), large) . '" class="fixed" />';
                            } ?>
                        </div>
                        <figcaption>
                            <h2><?php the_title(); ?></h2>
                            <p class="excerpt"><?php echo get_the_excerpt(); ?></p>
                            <?php
                                $links = array(
                                    'link' => get_post_meta(get_the_ID(), 'link', true), 
                                    'source' => get_post_meta(get_the_ID(), 'source', true)
                                );
                                if(count($links) > 0){
                                    echo '<p class="links">'; 
                                    if($links['link'] != null){
                                        echo '<a href="'.$links['link'].'">Link</a>';
                                    }
                                    if($links['link'] != null && $links['source'] != null){
                                        echo ' / '; 
                                    }
                                    if($links['source'] != null){
                                        echo '<a href="'.$links['source'].'">Source</a>';
                                    }
                                    echo '</p>'; 
                                }
                            ?>
                            <p class="tags"><?php    
                                    $tags = get_the_tags();
                                    $count = count($tags);
                                    $i=1;
                                    foreach ($tags as &$tag) {
                                        if($i < $count)
                                        {
                                          echo $tag->name . ', ';
                                          $i++;
                                        }
                                        else
                                        {
                                          echo $tag->name;
                                        } 
                                    }
                                ?></p>
                            <p class="year"><?php 
                                $date = get_post_meta(get_the_ID(), 'date', true);
                                if($date == null) { 
                                    the_date('Y');
                                } else {
                                    echo $date;
                                    } ?>
                            </p>
                        </figcaption>
                    </figure>
                <?php 
                    endwhile; endif;
                ?>
            </ul>
        </main>
        <footer>
            <p>© <?php echo date('Y'); ?></p>
        </footer>
        <script src="js/scripts-min.js"></script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-50941203-1', 'auto');
          ga('send', 'pageview');
        </script>
    </body>
</html>
