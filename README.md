# phpcon-2025

This is the source code for my PHP Conference 2025 presentation. The entire presentation is built with Laravel, Inertia.js, React, and Tailwind CSS.

The presentation is available at: https://phpcon-2025.laravel.cloud

## Running the presentation locally

```sh
composer install
php artisan key:generate
php artisan migrate:fresh --seed
npm install
composer dev
```
