class CreateNotions < ActiveRecord::Migration[7.0]
  def change
    create_table :notions do |t|
      t.string :key
      t.references :notionable, polymorphic: true

      t.timestamps
    end
  end
end
