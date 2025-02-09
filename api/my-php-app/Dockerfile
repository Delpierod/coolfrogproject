# Use the official PHP image with Apache and PHP 8.2
FROM php:8.2-apache

# Install dependencies and add GPG keys
RUN apt-get update && apt-get install -y gnupg curl

# Try different keyservers
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 0E98404D386FA1D9 || \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 0E98404D386FA1D9 || \
    apt-key adv --keyserver pgp.mit.edu --recv-keys 0E98404D386FA1D9

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 6ED0E7B82643E131 || \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6ED0E7B82643E131 || \
    apt-key adv --keyserver pgp.mit.edu --recv-keys 6ED0E7B82643E131

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys F8D2585B8783D481 || \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys F8D2585B8783D481 || \
    apt-key adv --keyserver pgp.mit.edu --recv-keys F8D2585B8783D481

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 54404762BBB6E853 || \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 54404762BBB6E853 || \
    apt-key adv --keyserver pgp.mit.edu --recv-keys 54404762BBB6E853

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BDE6D2B9216EC7A8 || \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BDE6D2B9216EC7A8 || \
    apt-key adv --keyserver pgp.mit.edu --recv-keys BDE6D2B9216EC7A8

RUN apt-get update && apt-get install -y libzip-dev unzip && docker-php-ext-install zip pdo_mysql

# Enable Apache rewrite module
RUN a2enmod rewrite

# Set the working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Install Composer (if needed)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist

# Expose port 80
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
