sudo docker stop PELAPAK
sudo docker rm PELAPAK
sudo docker rmi maharraden/PELAPAK
sudo docker run -d --name PELAPAK -p 5000:80 maharraden/PELAPAK:latest



