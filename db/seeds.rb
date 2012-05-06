# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)
#
user_names = ['acapone@constantcontact.com', 'wnytechguy@gmail.com', 'dgreenfield']

users = []

user_names.each do |user_name|
  users << User.create(:email => user_name, :password => 'test')
end

ad_titles = ['3 Bottles of Wine', '10 Boxes of Cheese', '340 Strawberries']
ad_descriptions = [
  %Q{
    Trading 3 full wine bottles sitting in my cellar.
  },
  %Q{
    Trading 10 lbs of high quality cheddar
  },
  %Q{
    Trading hundreds of juicy declicous strawberries.  Get ahold of me soon, they'll go fast!!!
  }
]
ad_latitudes= [
  42.37553,
  42.349074,
  42.358854
]
ad_longitudes= [
  -71.164885,
  -71.048176,
  -71.05762
]

ad_images = [File.open("#{Rails.root}/test/fixtures/wines.jpg")]

ad_titles.each_index do |i|
  Ad.create(:title => ad_titles[i], :description => ad_descriptions[i], :image => ad_images[0], :user => users[i], :latitude => ad_latitudes[i], :longitude => ad_longitudes[i])
end
