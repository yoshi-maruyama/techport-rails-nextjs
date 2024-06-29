class Notion < ApplicationRecord
  belongs_to :notionable, polymorphic: true

  validates :key, presence: true
end
