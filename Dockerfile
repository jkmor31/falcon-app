FROM python:latest

RUN mkdir -p /data
WORKDIR /data

COPY /dist/falcon-app .
EXPOSE 5400

CMD python3 -m http.server 5400