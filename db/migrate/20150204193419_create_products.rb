class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :shop_id, null: false
      t.string :name, null: false
      t.string :product_image, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.timestamps null: false
    end

    add_index :products, :shop_id
  end
end
