class Blog < ApplicationRecord
  has_one :notion, as: :notionable, dependent: :destroy
  validates :title, presence: true
  validates :summary, presence: true, length: { maximum: 500 }

  delegate :key, to: :notion, prefix: true, allow_nil: true
end
