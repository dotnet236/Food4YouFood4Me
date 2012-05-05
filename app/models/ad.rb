class Ad < ActiveRecord::Base
  attr_accessible :description, :image, :title, :userid

  belongs_to :user

  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end
