#!/usr/bin/env bash
# start-server.sh
if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ] ; then
    (cd twitterkafka; python manage.py collectstatic --no-input; python manage.py migrate; python manage.py createsuperuser --no-input)
fi
(cd twitterkafka; gunicorn core.wsgi --user www-data --bind 0.0.0.0:8000 --workers 3 --log-file /var/log/gunicorn/gunicorn_log) &
nginx -g "daemon off;"