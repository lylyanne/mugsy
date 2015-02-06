class Order < ActiveRecord::Base
  belongs_to :order_status
  has_many :order_items

  before_create :set_order_status
  before_save :update_total

  def subtotal
    order_items.collect { |oi| oi.valid? ? (oi.quantity * oi.unit_price) : 0 }.sum
  end

  private
  def set_order_status
    self.order_status_id = 1
  end

  def update_total
    self[:subtotal] = subtotal
    self[:shipping] = 5.00
    self[:tax] = 0.0925 * subtotal
    self[:total] = subtotal + self[:tax] + self[:shipping]
  end
end
