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

require 'test_helper'

class ShopTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
