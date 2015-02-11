# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX }, uniqueness: true
  validates :session_token, uniqueness: true

  after_initialize :ensure_session_token

  has_one(
    :shop,
    class_name: "Shop",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :ordered_items,
    class_name: "OrderItem",
    foreign_key: :buyer_id,
    primary_key: :id
  )

  has_many :products, through: :shop, source: :products
  has_many :order_items, through: :products, source: :order_item
  has_many :orders, through: :order_items, source: :order

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def sold_orders
    products = current_user.shop.products.ids
    all_order_items = OrderItem.all
    orders = []
    all_order_items.each do |order_item|
      orders << order_item.order if products.include?(order_item.product_id)
    end
    orders.uniq!
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
