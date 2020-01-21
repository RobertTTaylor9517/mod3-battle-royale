class CreateEnemies < ActiveRecord::Migration[6.0]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :health
      t.integer :weakness
      t.text :attacks, array: true, default: []
      t.integer :floor_id

      t.timestamps
    end
  end
end
