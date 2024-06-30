class BlogSerializer < ApplicationSerializer
  attribute :title
  attribute :summary
  attribute :notion_key, key: :notionKey
end
