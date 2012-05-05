class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.int :userid
      t.string :title
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
