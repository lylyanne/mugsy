# == Schema Information
#
# Table name: shops
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  name       :string           not null
#  shop_image :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shop < ActiveRecord::Base
  validates :owner_id, :name, :shop_image, presence: true
  validates :owner_id, :name, uniqueness: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :products

  def self.search(query)
    if query
      Shop.where("LOWER(name) LIKE ?", "%#{query.downcase}%")
    else
      Shop.all
    end
  end
end
