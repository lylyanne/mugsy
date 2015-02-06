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

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
