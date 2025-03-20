FROM python:3.13-slim AS build

WORKDIR /server

COPY requirements.txt /server/requirements.txt

RUN pip3 install -r /server/requirements.txt

FROM python:3.13-slim

WORKDIR /server

COPY --from=build /usr/local/lib/python3.13/site-packages /usr/local/lib/python3.13/site-packages
COPY --from=build /usr/local/bin /usr/local/bin
COPY .env /server/.env

COPY --from=build /server /server

COPY ./app /server/app


CMD ["uvicorn", "app.server.app:server", "--host", "0.0.0.0", "--port", "8002", "--ssl-keyfile", "/etc/letsencrypt/live/new.recensa.ru/privkey.pem", "--ssl-certfile", "/etc/letsencrypt/live/new.recensa.ru/fullchain.pem"]



