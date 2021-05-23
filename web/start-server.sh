#!/usr/bin/env bash
# start-server.sh
if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ] ; then
    (cd twitterkafka; python manage.py createsuperuser --no-input)
fi
(cd twitterkafka; gunicorn core.wsgi --user www-data --bind 0.0.0.0:2195 --workers 3) &
nginx -g "daemon off;"