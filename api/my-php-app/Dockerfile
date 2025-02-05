# Use the official PHP image with Apache and PHP 8.2
FROM php:8.2-apache

# Install dependencies and add GPG keys
RUN apt-get update && apt-get install -y \
    gnupg \
    curl \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - \
    && apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install zip pdo_mysql

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
