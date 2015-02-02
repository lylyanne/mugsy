# Phase 3: Adding item to cart and removing item to cart, and checking out ~2 day

## Rails
### Models
* Order

### Controllers
* ProductsController (create, index, delete)

### Views
* products/cart.html.erb (shopping cart page. Only show all orders
  for current user with status: in-cart)

## Backbone
### Models
* Order

### Collections
* Orders

### Views
* OrderIndex (seller's view all orders's page)

## Gems/Libraries
* acts_as_shopping_cart

## Note
* In this phase, I need to keep the order sync up between what the buyer
and seller see
