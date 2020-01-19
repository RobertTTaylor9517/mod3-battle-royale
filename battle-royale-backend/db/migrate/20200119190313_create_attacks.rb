class CreateAttacks < ActiveRecord::Migration[6.0]
  def change
    create_table :attacks do |t|
      t.string :element
      t.string :name
      t.integer :damage
      t.timestamps
    end
  end
end
