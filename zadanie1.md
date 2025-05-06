
## 3.a. Budowanie obrazu 
docker build -t pogoda . 

## 3.b. Uruchomienie kontenera
docker run -d --name pogoda -p 8080:8080 pogoda

## 3.c. Otworzenie log.txt
docker exec pogoda cat /app/log.txt

## 3.d. Sprawdzenie ile warstw posiada zbudowany obraz
docker history pogoda


![Screenshot_20250506_085847](https://github.com/user-attachments/assets/cf365e0f-8dce-4fde-bc9c-f227c9afc534)
