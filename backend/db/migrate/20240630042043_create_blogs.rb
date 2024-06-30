class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.references :user
      t.string :title, null: false, default: ""
      t.text :summary, null: false

      t.timestamps
    end
  end
end
