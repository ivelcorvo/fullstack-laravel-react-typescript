FROM php:8.2-fpm-alpine

# Instala dependências
RUN apk add --no-cache \
    $PHPIZE_DEPS \
    libpq-dev \
    git \
    unzip

# Instala extensões PHP
RUN docker-php-ext-install pdo pdo_pgsql

# Instala o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Define permissões de usuário (melhor prática)
RUN addgroup -g 1000 appuser && \
    adduser -G appuser -u 1000 -D appuser
USER appuser