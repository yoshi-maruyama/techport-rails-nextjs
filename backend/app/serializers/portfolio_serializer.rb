class PortfolioSerializer < ApplicationSerializer
  attribute :title
  attribute :url
  attribute :summary
  attribute :notion_key, key: :notionKey
end
