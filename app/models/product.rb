class Product < ActiveRecord::Base
  PRODUCT_CATEGORY = ["travel mug", "mason jar", "coffee mug"]
  validates :shop_id, :name, :product_image, :description, :price, :category, presence: true
  validates :category, inclusion: { in: PRODUCT_CATEGORY }

  belongs_to :shop
  has_many :order_items
end
