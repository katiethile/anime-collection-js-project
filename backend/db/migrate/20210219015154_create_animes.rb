class CreateAnimes < ActiveRecord::Migration[6.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.integer :rating
      t.integer :user_id
      t.text :review

      t.timestamps
    end
  end
end
