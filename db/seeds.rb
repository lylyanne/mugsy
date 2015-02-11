# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

OrderItem.delete_all
Order.delete_all

User.delete_all
User.create! id: 1, email: "user@user.com", password: "password"
User.create! id: 2, email: "user2@user.com", password: "password"
User.create! id: 3, email: "user3@user.com", password: "password"
User.create! id: 4, email: "user4@user.com", password: "password"

Shop.delete_all
Shop.create! id: 1, owner_id: 1, name: "MooDesign Shop",
shop_image: "https://www.filepicker.io/api/file/4MeShggeTiaE87t3LqOb"
Shop.create! id: 2, owner_id: 2, name: "Full Metal Alchemist Shop",
shop_image: "https://www.filepicker.io/api/file/G6xUeFbtTUua33sslteT"
Shop.create! id: 3, owner_id: 3, name: "Walking Dead Shop",
shop_image: "https://www.filepicker.io/api/file/LiVvUl5UTsG0k7YJDrLL"
Shop.create! id: 4, owner_id: 4, name: "Hunger Games Shop",
shop_image: "https://www.filepicker.io/api/file/ZKUMZ9fbSJOe5TIA2ezv"

Product.delete_all
Product.create! id: 1, shop_id: 3, name: "Zombie eat brains mug",
description: "zombie eat brains, but you know that right...",
price: 15.00,
category: "coffee mug",
product_image: "https://www.filepicker.io/api/file/0m53n3enTdKfcklHh27Z"
Product.create! id: 2, shop_id: 2, name: "Alphonse cute mug",
description: "Alphonse cartoon mug. Adorable gift for friends and family",
price: 13.00,
category: "coffee mug",
product_image: "https://www.filepicker.io/api/file/9yWsA0YxRki5jV4oboiq"
Product.create! id: 3, shop_id: 2, name: "Edward red mug",
description: "Edward red mug. Dishwasher and microwave safe",
price: 13.00,
category: "coffee mug",
product_image: "https://www.filepicker.io/api/file/W5DqdSaKRiuZ1YTAINLv"
Product.create! id: 4, shop_id: 1, name: "Cow coffee mug",
description: "Moo-tiful coffee mug for the milk lovers in your family",
price: 15.00,
category: "coffee mug",
product_image: "https://www.filepicker.io/api/file/4LIYO7cS3Ot6VWZ6VTYT"

OrderStatus.delete_all
OrderStatus.create! id: 1, name: "In Cart"
OrderStatus.create! id: 2, name: "Placed"
OrderStatus.create! id: 3, name: "Shipped"
OrderStatus.create! id: 4, name: "Cancelled"
