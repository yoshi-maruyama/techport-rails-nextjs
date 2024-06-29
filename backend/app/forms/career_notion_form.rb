class CareerNotionForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :title, :string
  attribute :started_at, :date
  attribute :ended_at, :date
  attribute :description, :string
  attribute :notion_key, :string

  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 500 }
  validates :started_at, presence: true
  validates :notion_key, presence: true

  def initialize(career: Career.new, attributes: nil)
    @career = career
    attributes ||= default_attributes
    super(attributes)
  end

  def save
    return false if invalid?

    ActiveRecord::Base.transaction do
      career.assign_attributes(title:, started_at:, ended_at:, description:)
      career.save!
      notion = career.notion.presence || career.build_notion
      notion.assign_attributes(key: notion_key)
      notion.save!
    end
    true
  rescue
    false
  end

  def to_model
    career
  end

  def persisted?
    career.persisted?
  end

  private
  attr_reader :career

  def default_attributes
    {
      title: career.title,
      started_at: career.started_at,
      ended_at: career.ended_at,
      description: career.description,
      notion_key: career.notion_key
    }
  end
end
