class Shop < ActiveRecord::Base
  validates :owner_id, :name, :shop_image, presence: true
  validates :owner_id, :name, uniqueness: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )
end
