class BlogNotionForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :title, :string
  attribute :summary, :string
  attribute :notion_key, :string

  validates :title, presence: true
  validates :summary, presence: true, length: { maximum: 500 }

  def initialize(blog: Blog.new, attributes: nil)
    @blog = blog
    attributes ||= default_attributes
    super(attributes)
  end

  def save
    return false if invalid?

    ActiveRecord::Base.transaction do
      blog.assign_attributes(title:, summary:)
      blog.save!
      notion = blog.notion.presence || blog.build_notion
      notion.assign_attributes(key: notion_key)
      notion.save!
    end
    true
  rescue
    false
  end

  def to_model
    blog
  end

  def persisted?
    blog.persisted?
  end

  private
  attr_reader :blog

  def default_attributes
    {
      title: blog.title,
      summary: blog.summary,
      notion_key: blog.notion_key
    }
  end
end
