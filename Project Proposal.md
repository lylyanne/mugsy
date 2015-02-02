**Minimum Viable Product**

As Etsy clone, users can:

* create accounts
* create sessions (log in)
* create shops
* edit shops
* create product
* edit product
* delete product
* view my shop's order (as seller)
* Add item to shopping cart
* view my order (as buyer)

**Schema Information**

**stores**

| column name   | data type  | details                                 |
| ------------- |:----------:| ---------------------------------------:|
| id            | integer    | not null, primary key                   |
| owner_id      | integer    | not null, foreign key (ref. users)      |
| name          | string     | not null                                |
| store_img     | string     | not null

**products**

| column name   | data type  | details                                 |
| ------------- |:----------:| ---------------------------------------:|
| id            | integer    | not null, primary key                   |
| store_id      | integer    | not null, foreign key (ref. stores)     |
| product_name  | string     | not null                                |
| product_img   | string     | not null                                |
| product_desc  | text       | not null                                |
| price         | float      | not null                                |
| categories    | string     | not null                                |

**orders**

| column name   | data type  | details                                 |
| ------------- |:----------:| ---------------------------------------:|
| id            | integer    | not null, primary key                   |
| store_id      | integer    | not null, foreign key (ref. stores)     |
| buyer_id      | integer    | not null, foreign key (ref. users)      |
| product_id    | integer    | not null, foreign key (ref. product)    |
| product_name  | string     | not null                                |
| price         | float      | not null                                |
| status        | string     |                                         |

**users**

| column name     | data type  | details                               |
| --------------- |:----------:| -------------------------------------:|
| id              | integer    | not null, primary key                 |
| email           | string     | not null, unique                      |
| password_digest | string     | not null                              |
| session_token   | string     | not null, unique                      |

**Question to TA:**
I am not entirely sure how I'll do the shopping cart. I am not sure on
the workflow as well as the orders db schema.

I really want to do this project and I don't want to shy away from it
just because I am scared of shopping cart (among others. Still iffy on
Backbone)

My plan is to have the user login before they can add things to
shopping cart.
If the user is logged in, the button on product show page will say 'Add
to shopping cart'.
If the user is not logged in, the button on product show page will say
'Login' or 'Sign Up' and next to it there will be a 'Use Guest login'
button.

I envision when the user adds item to shopping cart, I'll make an entry
in the Orders database with status 'in-cart'. The Orders database
contain id, store_id, buyer_id, product_id, product_name, price, status.

When the user clicks the checkout button, then all the orders with this
user's buyer id will change status to 'incomplete' and seller will be
able to see the orders on their page.

Seller can then click the 'Shipped' button to change the order status to
'complete'. Once seller clicked the shipped button, the order will not
show up in their orders page anymore.

Is this sounds like a reasonable workflow, is my schema correct?

**Bonus Feature:**
* Search feature
