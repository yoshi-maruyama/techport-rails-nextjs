class Api::V1::PortfoliosController < ApiController
  def index
    render json: portfolios, each_serializer: PortfolioSerializer
  end

  private

  def user
    @user ||= User.first
  end

  def portfolios
    @portfolios ||= user.portfolios.includes(:notion).order(created_at: :desc)
  end
end
