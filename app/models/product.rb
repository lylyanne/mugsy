# == Schema Information
#
# Table name: products
#
#  id            :integer          not null, primary key
#  shop_id       :integer          not null
#  name          :string           not null
#  product_image :string           not null
#  description   :text             not null
#  price         :float            not null
#  category      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Product < ActiveRecord::Base
  PRODUCT_CATEGORY = ["travel mug", "mason jar", "coffee mug"]
  validates :shop_id, :name, :product_image, :description, :price, :category, presence: true
  validates :category, inclusion: { in: PRODUCT_CATEGORY }

  belongs_to :shop

  has_one :order_item

  def self.search(query)
    if query
      Product.where("LOWER(name) LIKE ?", "%#{query.downcase}%")
    else
      Product.all
    end
  end
end
