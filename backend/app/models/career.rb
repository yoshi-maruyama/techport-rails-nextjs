class Career < ApplicationRecord
  has_one :notion, as: :notionable, dependent: :destroy

  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 500 }
  validates :started_at, presence: true
end
