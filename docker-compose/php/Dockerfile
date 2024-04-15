FROM phpdockerio/php:7.4-fpm AS crmeb_php
WORKDIR "/var/www"

# 扩展依赖
RUN apt-get update; \
    apt-get -y --no-install-recommends install \
    php7.4-bcmath \ 
    php7.4-redis \
    php7.4-mysqli \
    php7.4-gd
    RUN apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*; \
    echo "open_basedir = /tmp:/var" > /etc/php/7.4/fpm/conf.d/open_basedir.ini
