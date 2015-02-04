class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|

      t.integer :owner_id, null: false
      t.string :name, null: false
      t.string :shop_image, null: false
      t.timestamps null: false
    end

    add_index :shops, :owner_id, unique: true
    add_index :shops, :name, unique: true
  end
end
