--Collection for User
CREATE TABLE person (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

--Collection for Save Favorite Articles from RSS
CREATE TABLE favoriteArticles (
    "id" SERIAL PRIMARY KEY,
    "author" VARCHAR(50),
    "link" VARCHAR (200),
    "pubDate" VARCHAR(30),
    "thumbnail" VARCHAR(300),
    "title" VARCHAR (300),
    "description" VARCHAR (1000), 
    "person_id" INT REFERENCES "person"
);

--Collection for Save RSS URLS
CREATE TABLE rss (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (90) NOT NULL,
    "title" VARCHAR (100),
    "link" VARCHAR (100),
    "description" VARCHAR (400), 
    "image" VARCHAR (150),
    "person_id" INT REFERENCES "person"
);

--Collections for Recommend RSS links
CREATE TABLE rssLinks (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (90) NOT NULL,
    "title" VARCHAR (100),
    "image" VARCHAR (150)
);

--Recommend Rss Data
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(1, 'https://www.theverge.com/rss/frontpage', 'The Verge', 'https://ihateapplefanboys.com/wp-content/uploads/2017/12/the-verge-logo--730x410.png') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(2, 'https://www.wired.com/feed/rss', 'Wired', 'http://www.satellesinc.com/wp-content/uploads/2018/03/WORKS_wired-magazine.jpg') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(3, 'https://www.computerworld.com/index.rss', 'Computer World', 'https://idge.staticworld.net/ctw/computerworld-logo300x300.png') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(4, 'https://www.cnet.com/rss/news/', 'CNET', 'https://vignette.wikia.nocookie.net/logopedia/images/a/a9/Cnet_logo_JPEG.jpg/revision/latest?cb=20120528164504') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(5, 'http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml', 'NY Times', 'http://www.kayaknews.com/wp-content/uploads/2016/02/NY-Times-Logo.jpg') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(6, 'https://www.techspot.com/backend.xml', 'Tech Spot', 'https://prnews.io/content/platform/11018/logo.jpeg?1502877502') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(7, 'https://www.androidauthority.com/feed/', 'Android Authority', 'http://timbre-app.com/assets/img/android-authority.png') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(8, 'https://thenextweb.com/section/tech/feed/', 'Tech I Next Web', 'http://nathanbeers.com/wp-content/uploads/2018/05/xGOyVqjV.jpg') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(9, 'https://hackaday.com/blog/feed/', 'Hackaday', 'http://1.bp.blogspot.com/-x1OgGnQ4ZD4/VM_4f6L9nNI/AAAAAAAAADg/Jde-e7CU_zw/s1600/unnamed.png') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(10, 'https://www.siliconrepublic.com/feed', 'Silicone Republic', 'https://skytango.com/wp-content/uploads/2016/10/logo-silicon-republic.jpg') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(11, 'https://www.techhive.com/index.rss', 'Techhive', 'https://pbs.twimg.com/profile_images/2159820009/TH-512_400x400.jpeg') RETURNING "id", "url", "title", "image";
INSERT INTO "public"."rsslinks"("id", "url", "title", "image") VALUES(12, 'https://www.geek.com/feed/', 'Geek', 'http://1.bp.blogspot.com/-x1OgGnQ4ZD4/VM_4f6L9nNI/AAAAAAAAADg/Jde-e7CU_zw/s1600/unnamed.png') RETURNING "id", "url", "title", "image";


