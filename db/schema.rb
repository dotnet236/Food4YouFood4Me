# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120505190321) do

  create_table(:users) do |t|
    t.database_authenticatable :null => false
    t.recoverable
    t.rememberable
    t.trackable
    t.timestamps
  end

  add_index :users, :email,                :unique => true
  add_index :users, :reset_password_token, :unique => true

  create_table :ads do |t|
    t.integer :userid
    t.string :title
    t.text :description
    t.float :latitude
    t.float :longitude
    t.timestamps
  end

  change_table :ads do |t|
    t.has_attached_file :image
  end
end
