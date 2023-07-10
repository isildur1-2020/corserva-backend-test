# Full Stack recruitment test Esteban Gómez

## Run

**pre requisites**

- docker
- docker-compose

# Commands

**run server**

- docker-compose build && docker-compose up -d

**run seed**

- docker exec corserva_backend /bin/sh -c "cd dist && npx sequelize-cli db:seed:all"

**run test**

- npm run test

# Url available

- Product: http://0.0.0.0:8080/api/v1/product/
- Order Sale: http://0.0.0.0:8080/api/v1/order-sale/

Creator: Esteban Gómez
