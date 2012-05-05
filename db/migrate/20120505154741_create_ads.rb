class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.integer :userid
      t.string :title
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
