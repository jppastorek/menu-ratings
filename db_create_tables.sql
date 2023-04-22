CREATE TABLE
  IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE,
    residence TEXT
  );

CREATE TABLE
  IF NOT EXISTS restaurants (
    restaurant_id INTEGER PRIMARY KEY,
    restaurant_name TEXT NOT NULL,
    restaurant_location TEXT NOT NULL,
    phone TEXT UNIQUE,
    website TEXT UNIQUE,
    cuisine TEXT,
    restaurant_hours TEXT,
    established INTEGER,
    rating TEXT NOT NULL,
    reviews TEXT NOT NULL,
    delivers TEXT NOT NULL,
    atmosphere TEXT,
    reservations TEXT
  );

CREATE TABLE
  IF NOT EXISTS restaurantCategories (
    id INTEGER PRIMARY KEY,
    category_name TEXT NOT NULL,
    restaurant_id INTEGER,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id)
  );

CREATE TABLE
  IF NOT EXISTS menus (
    menu_id INTEGER PRIMARY KEY,
    menu_name TEXT NOT NULL,
    restaurant_id INTEGER,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id)
  );

CREATE TABLE
  IF NOT EXISTS items (
    item_id INTEGER PRIMARY KEY,
    item_name TEXT NOT NULL,
    restaurant_id INTEGER,
    price INTEGER NOT NULL,
    item_description TEXT NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id)
  );

CREATE TABLE
  IF NOT EXISTS menuItems (
    id INTEGER PRIMARY KEY,
    menu_id INTEGER,
    item_id INTEGER,
    FOREIGN KEY (item_id) REFERENCES items (item_id),
    FOREIGN KEY (menu_id) REFERENCES menus (menu_id)
  );

CREATE TABLE
  IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    item_id INTEGER,
    rating INTEGER NOT NULL,
    comment TEXT,
    dateCreated datetime,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (item_id) REFERENCES items (item_id)
  );

CREATE TABLE
  IF NOT EXISTS savedItems (
    id INTEGER PRIMARY KEY,
    item_id INTEGER,
    user_id INTEGER,
    dateSaved datetime,
    FOREIGN KEY (item_id) REFERENCES items (item_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
  );

CREATE TABLE
  IF NOT EXISTS favoriteRestaurants (
    id INTEGER PRIMARY KEY,
    restaurant_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id)
  );