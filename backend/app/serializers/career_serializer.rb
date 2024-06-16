class CareerSerializer < ApplicationSerializer
  attribute :title
  attribute :description
  attribute :started_at, key: :startedAt
  attribute :ended_at, key: :endedAt
end
