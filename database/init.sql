-- Инициализация базы данных для ювелирного магазина MumiShop

-- Создание расширений PostgreSQL для оптимизации
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Создание индексов для полнотекстового поиска
-- Будет создано автоматически Prisma, но можно добавить дополнительные оптимизации

-- Настройка часового пояса
SET timezone = 'Europe/Moscow';

-- Создание пользователя и базы данных (если запускается от суперпользователя)
-- DO $$ 
-- BEGIN
--     IF NOT EXISTS (SELECT FROM pg_user WHERE usename = 'jewelry_user') THEN
--         CREATE USER jewelry_user WITH PASSWORD 'jewelry_pass';
--     END IF;
-- END
-- $$;

-- GRANT ALL PRIVILEGES ON DATABASE jewelry_db TO jewelry_user;
-- GRANT ALL ON SCHEMA public TO jewelry_user;
