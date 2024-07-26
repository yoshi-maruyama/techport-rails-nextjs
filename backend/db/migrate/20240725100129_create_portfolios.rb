class CreatePortfolios < ActiveRecord::Migration[7.0]
  def change
    create_table :portfolios do |t|
      t.references :user
      t.string :title, null: false, default: ""
      t.text :summary, null: false
      t.string :url, null: false, default: ""

      t.timestamps
    end
  end
end
