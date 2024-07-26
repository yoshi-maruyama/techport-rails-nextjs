class User < ApplicationRecord
  has_many :careers, dependent: :destroy
  has_many :blogs, dependent: :destroy
  has_many :portfolios, dependent: :destroy
end
