class CreateCareers < ActiveRecord::Migration[7.0]
  def change
    create_table :careers do |t|
      t.references :user
      t.string :title, null: false, default: ""
      t.text :description, null: false
      t.date :started_at, null: false, default: -> { '(CURRENT_DATE)' }
      t.date :ended_at

      t.timestamps
    end
  end
end
