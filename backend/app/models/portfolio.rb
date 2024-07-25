class Portfolio < ApplicationRecord
  belongs_to :user
  has_one :notion, as: :notionable, dependent: :destroy

  validates :title, presence: true
  validates :summary, presence: :true, length: { maximum: 500 }
end
