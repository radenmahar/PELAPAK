sudo docker stop pelapak
sudo docker rm pelapak
sudo docker rmi maharraden/pelapak
sudo docker run -d --name pelapak -p 5000:80 maharraden/pelapak:latest



