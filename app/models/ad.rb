class Ad < ActiveRecord::Base
  attr_accessible :description, :image, :title, :userid

  belongs_to :user
end
