class AddBuyerIdToOrderItem < ActiveRecord::Migration
  def change
    add_column :order_items, :buyer_id, :integer, null: false
    add_index :order_items, :buyer_id
  end
end
