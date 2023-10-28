# Menggunakan Image NodeJS dari DockerHub
FROM node:20.9.0-alpine3.18

# Setel direktori di dalam kontainer
WORKDIR /app

# Copy Package.json dan package-lock.json ke direktori
COPY package*.json ./

# Install Devdepedency aplikasi
RUN npm install --save-dev

# Salin sumber aplikasi
COPY . . 

# Expose port yang digunakan oleh aplikasi
EXPOSE 3090

# Definisikan perintah untuk menjalankan aplikasi
CMD ["node", "app.js"]