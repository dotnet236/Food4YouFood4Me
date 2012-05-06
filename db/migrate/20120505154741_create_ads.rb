class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads, :options => 'ENGINE=MyISAM' do |t|
      t.integer :userid
      t.string :title
      t.text :description
      t.float :latitude
      t.float :longitude

      t.timestamps
    end

#   change_table :ads do |t|
#     t.index :latlon, :spatial => true
#   end
  end
end
