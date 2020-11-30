CREATE TABLE `posts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `author` varchar(255),
  `title` varchar(255),
  `body` text,
  `created_at` timestamp,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP 
);
