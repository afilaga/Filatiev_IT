server {
    listen 80;
    server_name it.filatiev.pro;

    root /var/www/it.filatiev.pro;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Basic security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    # Gzip settings
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;
}
