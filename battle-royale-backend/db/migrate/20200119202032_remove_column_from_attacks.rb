class RemoveColumnFromAttacks < ActiveRecord::Migration[6.0]
  def change

    remove_column :attacks, :character_id, :integer
  end
end
