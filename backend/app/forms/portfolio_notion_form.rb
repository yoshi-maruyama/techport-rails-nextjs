class PortfolioNotionForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :title, :string
  attribute :url, :string
  attribute :summary, :string
  attribute :notion_key, :string

  validates :title, presence: true
  validates :summary, presence: true, length: { maximum: 500 }

  def initialize(portfolio: Portfolio.new, attributes: nil)
    @portfolio = portfolio
    attributes ||= default_attributes
    super(attributes)
  end

  def save
    return false if invalid?

    ActiveRecord::Base.transaction do
      portfolio.assign_attributes(title:, summary:, url:)
      portfolio.save!
      notion = portfolio.notion.presence || portfolio.build_notion
      notion.assign_attributes(key: notion_key)
      notion.save!
    end
    true
  rescue
    false
  end

  def to_model
    portfolio
  end

  def persisted?
    portfolio.persisted?
  end

  private
  attr_reader :portfolio

  def default_attributes
    {
      title: portfolio.title,
      url: portfolio.url,
      summary: portfolio.summary,
      notion_key: portfolio.notion_key
    }
  end
end
