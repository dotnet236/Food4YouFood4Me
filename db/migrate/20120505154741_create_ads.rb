class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads, :options => 'ENGINE=MyISAM' do |t|
      t.point :latlon, :null => false
      t.integer :userid
      t.string :title
      t.text :description

      t.timestamps
    end

    change_table :ads do |t|
      t.index :latlon, :spatial => true
    end
  end
end
