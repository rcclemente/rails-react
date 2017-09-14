class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :subject
      t.string :message
      t.integer :rank

      t.timestamps
    end
  end
end
