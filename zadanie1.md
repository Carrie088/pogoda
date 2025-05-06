
## 3.a. Budowanie obrazu 
docker build -t pogoda . 

## 3.b. Uruchomienie kontenera
docker run -d --name pogoda -p 8080:8080 pogoda

## 3.c. Otworzenie log.txt
docker exec pogoda cat /app/log.txt

## 3.d. Sprawdzenie ile warstw posiada zbudowany obraz
docker history pogoda


