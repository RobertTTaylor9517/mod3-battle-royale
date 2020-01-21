class ChangeWeaknessToBeStringInEnemies < ActiveRecord::Migration[6.0]
  def change
    change_column :enemies, :weakness, :string
  end
end
